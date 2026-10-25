import { connectToDatabase } from "./db";
import { Scheme } from "./models/Scheme";
import { News } from "./models/News";
import { Announcement } from "./models/Announcement";
import { initialSchemes, initialNews, SchemeItem, NewsItem } from "./data";

// In-memory cache fallback if MongoDB is not connected
let memorySchemes: SchemeItem[] = [...initialSchemes];
let memoryNews: NewsItem[] = [...initialNews];
let memoryAnnouncement = {
  text: "PM-Kisan 19th installment, Namo Shetkari 9th list & Majhi Ladki Bahin DBT updates live.",
  link: "",
  enabled: true,
};

export async function getAllSchemes(filters?: {
  category?: string;
  type?: string;
  state?: string;
  search?: string;
  featured?: boolean;
}): Promise<SchemeItem[]> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const query: any = {};
      if (filters?.category && filters.category !== "All") {
        query.category = filters.category;
      }
      if (filters?.type && filters.type !== "All") {
        query.type = filters.type;
      }
      if (filters?.state && filters.state !== "All") {
        query.state = filters.state;
      }
      if (filters?.featured !== undefined) {
        query.featured = filters.featured;
      }
      if (filters?.search) {
        query.$or = [
          { title: { $regex: filters.search, $options: "i" } },
          { summary: { $regex: filters.search, $options: "i" } },
          { beneficiary: { $regex: filters.search, $options: "i" } },
        ];
      }

      const docs = await Scheme.find(query).sort({ featured: -1, createdAt: -1 }).lean();
      if (docs && docs.length > 0) {
        return docs.map((doc: any) => ({
          ...doc,
          id: doc._id.toString(),
          views: doc.views ?? 0,
          lastViewedAt: doc.lastViewedAt ? new Date(doc.lastViewedAt).toISOString() : undefined,
          updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        })) as SchemeItem[];
      }
    }
  } catch (error) {
    console.error("Failed fetching from DB, falling back to memory:", error);
  }

  // Fallback to memory
  return memorySchemes.filter((s) => {
    if (filters?.category && filters.category !== "All" && s.category !== filters.category) return false;
    if (filters?.type && filters.type !== "All" && s.type !== filters.type) return false;
    if (filters?.state && filters.state !== "All" && s.state.toLowerCase() !== filters.state.toLowerCase()) return false;
    if (filters?.featured !== undefined && s.featured !== filters.featured) return false;
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      const match =
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.beneficiary.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });
}

export async function getSchemeBySlug(slug: string): Promise<SchemeItem | null> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const doc: any = await Scheme.findOne({ slug }).lean();
      if (doc) {
        return {
          ...doc,
          id: doc._id.toString(),
          views: doc.views ?? 0,
          lastViewedAt: doc.lastViewedAt ? new Date(doc.lastViewedAt).toISOString() : undefined,
          updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        } as SchemeItem;
      }
    }
  } catch (error) {
    console.error("Failed fetching scheme by slug from DB:", error);
  }

  return memorySchemes.find((s) => s.slug === slug) || null;
}

export async function createScheme(data: Partial<SchemeItem>): Promise<SchemeItem> {
  const slug =
    data.slug ||
    data.title
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") ||
    `scheme-${Date.now()}`;

  const newSchemeData = {
    ...data,
    slug,
    benefits: data.benefits || [],
    eligibility: data.eligibility || [],
    documentsRequired: data.documentsRequired || [],
    howToApply: data.howToApply || [],
    faqs: data.faqs || [],
    featured: Boolean(data.featured),
    views: 0,
    status: data.status || "Active",
    updatedAt: new Date().toISOString().split("T")[0],
  };

  try {
    const db = await connectToDatabase();
    if (db) {
      const created = await Scheme.create(newSchemeData);
      return {
        ...created.toObject(),
        id: created._id.toString(),
        updatedAt: new Date().toISOString().split("T")[0],
      } as SchemeItem;
    }
  } catch (error) {
    console.error("Error creating scheme in DB, saving in memory:", error);
  }

  const memoryItem: SchemeItem = {
    ...newSchemeData,
    id: `mem-${Date.now()}`,
  } as SchemeItem;
  memorySchemes.unshift(memoryItem);
  return memoryItem;
}

export async function getAllNews(): Promise<NewsItem[]> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const docs = await News.find().sort({ publishedAt: -1 }).lean();
      if (docs && docs.length > 0) {
        return docs.map((doc: any) => ({
          ...doc,
          id: doc._id.toString(),
          views: doc.views ?? 0,
          lastViewedAt: doc.lastViewedAt ? new Date(doc.lastViewedAt).toISOString() : undefined,
          publishedAt: new Date(doc.publishedAt).toISOString().split("T")[0],
        })) as NewsItem[];
      }
    }
  } catch (error) {
    console.error("Error fetching news from DB:", error);
  }

  return memoryNews;
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const doc: any = await News.findOne({ slug }).lean();
      if (doc) {
        return {
          ...doc,
          id: doc._id.toString(),
          views: doc.views ?? 0,
          lastViewedAt: doc.lastViewedAt ? new Date(doc.lastViewedAt).toISOString() : undefined,
          publishedAt: new Date(doc.publishedAt).toISOString().split("T")[0],
        } as NewsItem;
      }
    }
  } catch (error) {
    console.error("Error fetching news by slug from DB:", error);
  }

  return memoryNews.find((n) => n.slug === slug) || null;
}

export async function getSchemeById(id: string): Promise<SchemeItem | null> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);
      const doc: any = isObjectId
        ? await Scheme.findById(id).lean()
        : await Scheme.findOne({ slug: id }).lean();
      if (doc) {
        return {
          ...doc,
          id: doc._id.toString(),
          updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        } as SchemeItem;
      }
    }
  } catch (error) {
    console.error("Failed fetching scheme by id from DB:", error);
  }

  return memorySchemes.find((s) => s.id === id || s.slug === id) || null;
}

export async function updateScheme(id: string, data: Partial<SchemeItem>): Promise<SchemeItem | null> {
  const updateData = {
    ...data,
    updatedAt: new Date().toISOString().split("T")[0],
  };

  try {
    const db = await connectToDatabase();
    if (db) {
      const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);
      const updated: any = isObjectId
        ? await Scheme.findByIdAndUpdate(id, { $set: updateData }, { new: true }).lean()
        : await Scheme.findOneAndUpdate({ slug: id }, { $set: updateData }, { new: true }).lean();
      if (updated) {
        return {
          ...updated,
          id: updated._id.toString(),
          updatedAt: new Date().toISOString().split("T")[0],
        } as SchemeItem;
      }
    }
  } catch (error) {
    console.error("Error updating scheme in DB:", error);
  }

  const idx = memorySchemes.findIndex((s) => s.id === id || s.slug === id);
  if (idx !== -1) {
    memorySchemes[idx] = { ...memorySchemes[idx], ...updateData };
    return memorySchemes[idx];
  }
  return null;
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);
      const doc: any = isObjectId
        ? await News.findById(id).lean()
        : await News.findOne({ slug: id }).lean();
      if (doc) {
        return {
          ...doc,
          id: doc._id.toString(),
          publishedAt: new Date(doc.publishedAt).toISOString().split("T")[0],
        } as NewsItem;
      }
    }
  } catch (error) {
    console.error("Error fetching news by id from DB:", error);
  }

  return memoryNews.find((n) => n.id === id || n.slug === id) || null;
}

export async function updateNews(id: string, data: Partial<NewsItem>): Promise<NewsItem | null> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);
      const updated: any = isObjectId
        ? await News.findByIdAndUpdate(id, { $set: data }, { new: true }).lean()
        : await News.findOneAndUpdate({ slug: id }, { $set: data }, { new: true }).lean();
      if (updated) {
        return {
          ...updated,
          id: updated._id.toString(),
          publishedAt: new Date(updated.publishedAt).toISOString().split("T")[0],
        } as NewsItem;
      }
    }
  } catch (error) {
    console.error("Error updating news in DB:", error);
  }

  const idx = memoryNews.findIndex((n) => n.id === id || n.slug === id);
  if (idx !== -1) {
    memoryNews[idx] = { ...memoryNews[idx], ...data };
    return memoryNews[idx];
  }
  return null;
}

export async function incrementSchemeViews(
  slugOrId: string
): Promise<{ views: number; lastViewedAt: string } | null> {
  const now = new Date();
  try {
    const db = await connectToDatabase();
    if (db) {
      const isObjectId = slugOrId.match(/^[0-9a-fA-F]{24}$/);
      const query = isObjectId ? { _id: slugOrId } : { slug: slugOrId };
      const updated: any = await Scheme.findOneAndUpdate(
        query,
        {
          $inc: { views: 1 },
          $set: { lastViewedAt: now },
        },
        { new: true }
      ).lean();

      if (updated) {
        return {
          views: updated.views || 1,
          lastViewedAt: now.toISOString(),
        };
      }
    }
  } catch (error) {
    console.error("Failed incrementing scheme views in DB:", error);
  }

  // Memory fallback
  const item = memorySchemes.find((s) => s.slug === slugOrId || s.id === slugOrId);
  if (item) {
    item.views = (item.views || 0) + 1;
    item.lastViewedAt = now.toISOString();
    return { views: item.views, lastViewedAt: item.lastViewedAt };
  }
  return null;
}

export async function incrementNewsViews(
  slugOrId: string
): Promise<{ views: number; lastViewedAt: string } | null> {
  const now = new Date();
  try {
    const db = await connectToDatabase();
    if (db) {
      const isObjectId = slugOrId.match(/^[0-9a-fA-F]{24}$/);
      const query = isObjectId ? { _id: slugOrId } : { slug: slugOrId };
      const updated: any = await News.findOneAndUpdate(
        query,
        {
          $inc: { views: 1 },
          $set: { lastViewedAt: now },
        },
        { new: true }
      ).lean();

      if (updated) {
        return {
          views: updated.views || 1,
          lastViewedAt: now.toISOString(),
        };
      }
    }
  } catch (error) {
    console.error("Failed incrementing news views in DB:", error);
  }

  // Memory fallback
  const item = memoryNews.find((n) => n.slug === slugOrId || n.id === slugOrId);
  if (item) {
    item.views = (item.views || 0) + 1;
    item.lastViewedAt = now.toISOString();
    return { views: item.views, lastViewedAt: item.lastViewedAt };
  }
  return null;
}

export async function getRealTimeAnalytics() {
  const [schemes, news] = await Promise.all([getAllSchemes(), getAllNews()]);
  const totalSchemeViews = schemes.reduce((acc, s) => acc + (s.views || 0), 0);
  const totalNewsViews = news.reduce((acc, n) => acc + (n.views || 0), 0);
  const totalViews = totalSchemeViews + totalNewsViews;

  const topSchemes = [...schemes]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5)
    .map((s) => ({
      id: s.id,
      title: s.title,
      slug: s.slug,
      views: s.views || 0,
      category: s.category,
      updatedAt: s.updatedAt,
      lastViewedAt: s.lastViewedAt,
    }));

  const topNews = [...news]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5)
    .map((n) => ({
      id: n.id,
      title: n.title,
      slug: n.slug,
      views: n.views || 0,
      category: n.category,
      publishedAt: n.publishedAt,
      lastViewedAt: n.lastViewedAt,
    }));

  return {
    totalSchemes: schemes.length,
    totalNews: news.length,
    totalSchemeViews,
    totalNewsViews,
    totalViews,
    topSchemes,
    topNews,
    timestamp: new Date().toISOString(),
  };
}

export async function getHeaderAnnouncement(): Promise<{
  text: string;
  link?: string;
  enabled: boolean;
}> {
  try {
    const db = await connectToDatabase();
    if (db) {
      const doc = await Announcement.findOne({ key: "header_announcement" }).lean();
      if (doc && (doc as any).text) {
        return {
          text: (doc as any).text,
          link: (doc as any).link || "",
          enabled: (doc as any).enabled !== false,
        };
      }
    }
  } catch (error) {
    console.error("Error fetching announcement from DB:", error);
  }
  return memoryAnnouncement;
}

export async function updateHeaderAnnouncement(
  text: string,
  link = "",
  enabled = true
): Promise<{ text: string; link?: string; enabled: boolean }> {
  memoryAnnouncement = { text, link, enabled };
  try {
    const db = await connectToDatabase();
    if (db) {
      const updated = await Announcement.findOneAndUpdate(
        { key: "header_announcement" },
        { $set: { text, link, enabled } },
        { upsert: true, new: true }
      ).lean();
      if (updated) {
        return {
          text: (updated as any).text,
          link: (updated as any).link || "",
          enabled: (updated as any).enabled !== false,
        };
      }
    }
  } catch (error) {
    console.error("Error updating announcement in DB:", error);
  }
  return memoryAnnouncement;
}

