# 🚀 Next.js + Drizzle ORM + Neon Database

This project is a **full-stack Next.js application** using **Drizzle ORM** to interact with a **Neon PostgreSQL database**. It fetches product data and displays it dynamically on a Next.js page.

## 📌 Features
- **Next.js 15** with App Router
- **Drizzle ORM** for database queries
- **Neon PostgreSQL** as the database
- **Type-safe migrations** with Drizzle
- **Supabase storage alternative (if needed)**

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
NEON_DATABASE_URL=postgresql://neondb_owner:your_password@your_neon_host/neondb?sslmode=require
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> 🔥 **Important:** Replace placeholders with your actual Neon & Supabase credentials.

### 4️⃣ Set Up Drizzle ORM

#### **Initialize Drizzle**
```bash
npx drizzle-kit generate:pg
```

#### **Run Migrations**
```bash
npx drizzle-kit push
```

---

## 📁 Project Structure
```
📂 your-project
 ├── 📂 lib
 │   ├── drizzle.ts      # Database connection
 │   ├── schema.ts       # Drizzle ORM schema
 ├── 📂 app
 │   ├── 📂 products
 │   │   ├── page.tsx    # Fetch and display products
 ├── .env.local          # Environment variables
 ├── README.md           # This file
 └── package.json        # Dependencies
```

---

## 🛠 Usage

### **Start the Development Server**
```bash
npm run dev
```
> Runs the app in development mode at `http://localhost:3000`

### **Fetching Products**
The app fetches products from the Neon PostgreSQL database and displays them using **Drizzle ORM**.

Example query inside `app/products/page.tsx`:
```typescript
import { db } from '@/lib/drizzle';
import { products } from '@/lib/schema';

export default async function ProductsPage() {
  const productList = await db.select().from(products);
  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>{product.name} - {product.price}</div>
      ))}
    </div>
  );
}
```

---

## 📦 Deployment

### **Deploy on Vercel**
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Link your project:
   ```bash
   vercel link
   ```
3. Deploy your app:
   ```bash
   vercel --prod
   ```

---

## 🛠 Debugging
If you encounter issues, check:
- The `.env.local` file has the correct **Neon database URL**.
- Migrations are applied correctly with `npx drizzle-kit push`.
- The `products` table in your database contains data.
- The browser **network requests** are not failing (use DevTools `F12`).

---

## 🎯 Next Steps
- Add **authentication** with Supabase Auth.
- Implement **pagination** and **search filters**.
- Optimize for **SEO and performance** with Next.js Image & Middleware.

---

## 📄 License
This project is open-source under the **MIT License**.

