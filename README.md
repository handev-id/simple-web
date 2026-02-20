# Nusantara Digital - Company Profile

Simple company profile website dengan fitur CRUD blog menggunakan Next.js, PostgreSQL, dan Tailwind CSS.

## Tech Stack

- Next.js 16.1.6 (App Router)
- TypeScript
- Tailwind CSS v4
- PostgreSQL
- React Hook Form
- Lucide Icons

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Edit file `.env` dan sesuaikan konfigurasi:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/web_test
ADMIN_PIN=123456
```

### 3. Setup Database

Jalankan migration untuk membuat tabel:

```bash
npm run db:migrate
```

Jalankan seeder untuk mengisi data dummy:

```bash
npm run db:seed
```

### 4. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Admin Panel

Akses admin panel di [http://localhost:3000/admin](http://localhost:3000/admin)

Masukkan PIN yang sudah dikonfigurasi di `.env` (default: `123456`)

## Available Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Jalankan production server
- `npm run db:migrate` - Jalankan database migration
- `npm run db:seed` - Jalankan database seeder
# simple-web
