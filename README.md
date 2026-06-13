# Talos LLC Website

A static e-commerce demo site for **Talos LLC** — premium tech accessories and industrial equipment. Built with vanilla HTML, CSS, JavaScript, and jQuery.

## Features

- 13 pages: Home, Shop, Product Detail, Cart, Checkout, About, Contact, Track Order, Account, and 4 policy pages
- 25 products across 5 categories (USD pricing)
- Dark lilac theme, fully responsive
- Cart persisted in browser localStorage
- Fake checkout (payment unavailable error)
- Cosmetic account login, fake contact/newsletter/track-order forms

## Running Locally

Because the site uses JavaScript modules and AJAX-free static files, open it with a local static server for the best experience:

### Option 1: Python (if installed)

```bash
cd "Talos Website"
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080)

### Option 2: Node.js npx

```bash
cd "Talos Website"
npx serve .
```

### Option 3: VS Code / Cursor Live Server

Right-click `index.html` and choose **Open with Live Server**.

### Option 4: Direct file open

You can double-click `index.html` to open in your browser. Cart and product pages will work; some browsers may restrict localStorage on `file://` URLs.

## Project Structure

```
index.html          Home page
shop.html           Product listing with category filters
product.html        Product detail (?id=product-slug)
cart.html           Shopping cart
checkout.html       Checkout form (fake payment)
about.html          About Talos LLC
contact.html        Contact form (fake submit)
track-order.html    Order tracking (always not found)
account.html        Login/register (cosmetic)
privacy.html        Privacy policy
terms.html          Terms of service
shipping.html       Shipping policy
refunds.html        Refund policy
css/styles.css      Dark lilac stylesheet
js/products.js      Product catalog (25 items)
js/cart.js          Cart localStorage logic
js/main.js          Page rendering and form handlers
images/             Logo, hero, category and product photos
```

## Company Info

**Talos LLC** — Wyoming, USA

## Notes

- All prices are in USD ($)
- 15% discount applies automatically on orders over $350 (display only)
- No backend, payments, or real user accounts

## Deploy to GitHub Pages (free)

Your site will be live at:

`https://YOUR-GITHUB-USERNAME.github.io/talos-website/`

### Step 1 — Create a GitHub repository

1. Sign in at [github.com](https://github.com)
2. Click **+** → **New repository**
3. Name it `talos-website` (or any name you prefer)
4. Leave it **Public**
5. Do **not** add a README, .gitignore, or license (this project already has them)
6. Click **Create repository**

### Step 2 — Push this project

Open a terminal in this folder and run (replace `YOUR-GITHUB-USERNAME`):

```bash
git init
git add .
git commit -m "Initial commit: Talos LLC static website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/talos-website.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. On GitHub, open your repository
2. Go to **Settings** → **Pages**
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Click **Save**

After 1–2 minutes your site will be live at the URL above.

### Optional — shorter URL (`username.github.io`)

If you want `https://YOUR-GITHUB-USERNAME.github.io` with no repo name in the path:

1. Create a repo named exactly `YOUR-GITHUB-USERNAME.github.io`
2. Push this code to that repo instead
3. Enable Pages the same way (branch `main`, root folder)

### Custom domain (not free)

GitHub Pages supports custom domains (e.g. `talosllc.com`) if you buy a domain elsewhere and add DNS records in **Settings → Pages → Custom domain**.
