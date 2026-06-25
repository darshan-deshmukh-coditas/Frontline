import authRoutes from "../feature-modules/auth/auth.routes.js";
import categoriesRoutes from "../feature-modules/categories/categories.routes.js";
import companyRoutes from "../feature-modules/company/company.routes.js";
import type { Route, Routes } from "./routes.types.js";

export const routes: Routes = [authRoutes, companyRoutes, categoriesRoutes];