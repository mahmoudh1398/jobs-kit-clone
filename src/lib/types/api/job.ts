export interface IJobsParams {
  ids: number[];
  companyNames: string[];
  companyIds: number[];
  categoryIds: number[];
  subCategoryIds: number[];
  specialityIds: number[];
  categorySlugs: string[];
  subCategorySlugs: string[];
  specialitySlugs: string[];
  page: number;
  limit: 9;
  order: "DESC" | "ASC";
  orderBy: string;
  expired: boolean;
  title: string;
}

export interface IJob {
  id: number;
  title: string;
  featured: boolean;
  datePosted: string;
  expirationDate: string;
  employmentType: string;
  positionLevel: string;
  company: Company;
  country: string;
  location: string;
  category: Category;
  subCategory: SubCategory;
  speciality: SubCategory;
  jobType: string;
  views: number;
  shares: number;
}

export interface IUserJob extends IJob {
  bookmarked: boolean;
  applicationId: number | null;
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
}

export interface Company {
  id: number;
  name: string;
  industry: string;
  description: string | null;
  address: string | null;
  phone: string;
  email: string | null;
  size: number;
  imageId: number;
  imageURL: string;
}

export interface IPagination {
  page: number;
  limit: number;
  order: string;
  orderBy: string;
  total: number;
  totalPages: number;
  nextPage: boolean;
  prevPage: boolean;
}
