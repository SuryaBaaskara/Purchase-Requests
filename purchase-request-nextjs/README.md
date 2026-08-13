# Purchase Request — Next.js + Tailwind CSS

UI technical test berdasarkan screenshot Purchase Requests.

## Stack

- Next.js
- React
- Tailwind CSS
- JavaScript

## Run

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Data produk berada di:

`src/data/products.js`

## Struktur

```text
app/
├── globals.css
├── layout.jsx
└── page.jsx

src/
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── EmptyState.jsx
│       ├── Input.jsx
│       └── QuantityInput.jsx
├── data/
│   └── products.js
├── features/
│   └── purchase-request/
│       └── components/
│           ├── CartItem.jsx
│           ├── OrderSummary.jsx
│           ├── ProductCard.jsx
│           └── ProductCatalog.jsx
└── utils/
    ├── cart.js
    └── currency.js
```
