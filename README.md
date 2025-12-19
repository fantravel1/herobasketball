# 🏀 HeroBasketball.com

<div align="center">

![HeroBasketball](https://img.shields.io/badge/HERO-BASKETBALL-5B2C6F?style=for-the-badge&labelColor=D4AC0D)
![Hugo](https://img.shields.io/badge/Hugo-Extended-FF4088?style=for-the-badge&logo=hugo)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwindcss)
![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-181717?style=for-the-badge&logo=github)

**The Definitive Global Women's Basketball Resource**

*Trilingual • Mobile-First • Game-Like Experience • 5,000+ Pages*

[🌐 English](https://herobasketball.com/en/) • [🇪🇸 Español](https://herobasketball.com/es/) • [🇫🇷 Français](https://herobasketball.com/fr/)

</div>

---

## 📖 Table of Contents

- [Vision & Mission](#-vision--mission)
- [Why HeroBasketball?](#-why-herobasketball)
- [Technical Stack](#-technical-stack)
- [Project Structure](#-project-structure)
- [Content Architecture](#-content-architecture)
- [The Hero Experience (UX)](#-the-hero-experience-ux)
- [Design System](#-design-system)
- [SEO & AEO Strategy](#-seo--aeo-strategy)
- [Trilingual Implementation](#-trilingual-implementation)
- [Page Templates](#-page-templates)
- [Schema Markup](#-schema-markup)
- [Performance Optimization](#-performance-optimization)
- [Build & Deployment](#-build--deployment)
- [Content Creation Guide](#-content-creation-guide)
- [Partner Integration](#-partner-integration)
- [Roadmap](#-roadmap)

---

## 🎯 Vision & Mission

### The Gap We Fill

Women's basketball is experiencing **unprecedented growth**:
- **322%** surge in WNBA searches (2024)
- **18.9M** viewers for NCAA Women's Championship (exceeding men's)
- **$35M** invested in Unrivaled league
- **13.6M** social mentions (+571% YoY)

Yet the digital landscape has only **~6 dedicated properties** vs. **340+ in men's basketball**.

### Our Mission

Build the **first comprehensive, free, trilingual resource** covering:

| Level | Coverage |
|-------|----------|
| **Professional** | WNBA, EuroLeague Women, Liga Femenina, LFB, WCBA, WNBL, WKBL, WJBL, 40+ leagues |
| **Collegiate** | NCAA D1/D2/D3, NAIA, NJCAA, international university basketball |
| **International** | FIBA World Cup, Olympics, continental championships, national teams |
| **Youth** | Development pathways, AAU, club systems, FIBA youth competitions |
| **Historical** | Legends, records, championship archives, evolution of the game |
| **Training** | Skills development, coaching philosophies, career pathways |

---

## 🚀 Why HeroBasketball?

### Competitive Advantages

| Advantage | Description |
|-----------|-------------|
| **First-Mover International** | No competitor covers EuroLeague Women, WCBA, LFB comprehensively |
| **Free vs. Paywalled** | Compete with Her Hoop Stats ($20/yr) and Basketball-Reference |
| **Trilingual Launch** | English + Spanish + French captures 3B+ speakers |
| **Mobile-First** | Competitors are desktop-legacy; we're built for 2025 |
| **AEO-Optimized** | Structured for AI assistants, not just Google |
| **Game-Like UX** | Unique interactive experience vs. static reference sites |

### Target Audiences

```
┌─────────────────────────────────────────────────────────────────┐
│  PRIMARY AUDIENCES                                               │
├─────────────────────────────────────────────────────────────────┤
│  👩‍🎓 Young Athletes (8-22)     → Skills, pathways, inspiration │
│  👨‍👩‍👧 Parents & Families        → Recruiting, development info  │
│  🎙️ Media & Journalists       → Quick-reference, fact sheets   │
│  🏀 Coaches & Trainers        → Philosophies, drills, systems  │
│  📊 Analysts & Researchers    → Stats, historical data         │
│  🌍 International Fans        → Global league coverage         │
│  🎮 Fantasy/Betting Users     → Player data, projections       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠 Technical Stack

### Core Technologies

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **SSG** | Hugo Extended | 0.121+ | Sub-1ms/page builds, native i18n |
| **CSS** | Tailwind CSS | 3.4+ | Utility-first, <10KB production |
| **Icons** | Heroicons + Custom | 2.0 | SVG icon system |
| **Search** | Pagefind | 1.0+ | Client-side static search |
| **Build** | GitHub Actions | - | CI/CD with caching |
| **Hosting** | GitHub Pages | - | Free, Fastly CDN |
| **CDN** | Cloudflare | Free | Additional caching, security |
| **Images** | Cloudinary | Free tier | External hosting, optimization |
| **Analytics** | Plausible/GA4 | - | Privacy-friendly analytics |
| **Comments** | Giscus | - | GitHub Discussions-based |

### Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | < 1.5s | Preload hero, AVIF/WebP, critical CSS |
| **INP** | < 100ms | Minimal JS, event delegation |
| **CLS** | < 0.05 | Explicit dimensions, font-display: swap |
| **Build Time** | < 30s | Hugo's Go-based speed |
| **Page Weight** | < 200KB | Aggressive optimization |

---

## 📁 Project Structure

```
herobasketball/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
│
├── archetypes/                     # Content templates
│   ├── player.md
│   ├── team.md
│   ├── league.md
│   ├── coach.md
│   ├── training.md
│   └── default.md
│
├── assets/
│   ├── css/
│   │   ├── main.css               # Tailwind entry point
│   │   ├── components/            # Component styles
│   │   │   ├── cards.css
│   │   │   ├── tables.css
│   │   │   ├── stats.css
│   │   │   └── achievements.css
│   │   └── utilities/
│   │       ├── animations.css     # Game-like animations
│   │       └── gradients.css
│   │
│   ├── js/
│   │   ├── main.js                # Core functionality
│   │   ├── search.js              # Pagefind integration
│   │   ├── filters.js             # Data filtering
│   │   ├── comparisons.js         # Player comparisons
│   │   ├── achievements.js        # Gamification system
│   │   └── theme.js               # Dark/light mode
│   │
│   └── images/
│       ├── hero/                  # Hero section images
│       ├── icons/                 # Custom SVG icons
│       └── patterns/              # Background patterns
│
├── config/
│   ├── _default/
│   │   ├── hugo.toml              # Base configuration
│   │   ├── languages.toml         # i18n settings
│   │   ├── menus.toml             # Navigation menus
│   │   ├── params.toml            # Site parameters
│   │   └── markup.toml            # Markdown settings
│   │
│   ├── production/
│   │   └── hugo.toml              # Production overrides
│   │
│   └── development/
│       └── hugo.toml              # Dev overrides
│
├── content/
│   ├── en/                        # English content
│   │   ├── _index.md              # Homepage
│   │   ├── players/
│   │   │   ├── _index.md          # Players directory
│   │   │   ├── a/                 # Alphabetical grouping
│   │   │   │   ├── _index.md
│   │   │   │   └── aja-wilson.md
│   │   │   ├── b/
│   │   │   ├── c/
│   │   │   │   └── caitlin-clark.md
│   │   │   └── ...
│   │   │
│   │   ├── teams/
│   │   │   ├── _index.md
│   │   │   ├── wnba/
│   │   │   │   ├── _index.md
│   │   │   │   ├── indiana-fever.md
│   │   │   │   ├── las-vegas-aces.md
│   │   │   │   └── ...
│   │   │   ├── euroleague/
│   │   │   ├── liga-femenina/
│   │   │   ├── lfb/
│   │   │   └── ...
│   │   │
│   │   ├── leagues/
│   │   │   ├── _index.md
│   │   │   ├── wnba/
│   │   │   │   ├── _index.md
│   │   │   │   ├── history.md
│   │   │   │   ├── rules.md
│   │   │   │   ├── records.md
│   │   │   │   └── seasons/
│   │   │   │       ├── 2024.md
│   │   │   │       ├── 2023.md
│   │   │   │       └── ...
│   │   │   ├── euroleague-women/
│   │   │   ├── ncaa/
│   │   │   └── ...
│   │   │
│   │   ├── competitions/
│   │   │   ├── _index.md
│   │   │   ├── fiba-world-cup/
│   │   │   ├── olympics/
│   │   │   ├── eurobasket/
│   │   │   └── ...
│   │   │
│   │   ├── legends/
│   │   │   ├── _index.md
│   │   │   ├── diana-taurasi.md
│   │   │   ├── lisa-leslie.md
│   │   │   ├── sheryl-swoopes.md
│   │   │   └── ...
│   │   │
│   │   ├── coaches/
│   │   │   ├── _index.md
│   │   │   ├── dawn-staley.md
│   │   │   ├── becky-hammon.md
│   │   │   └── ...
│   │   │
│   │   ├── training/
│   │   │   ├── _index.md
│   │   │   ├── fundamentals/
│   │   │   │   ├── shooting.md
│   │   │   │   ├── dribbling.md
│   │   │   │   ├── passing.md
│   │   │   │   └── defense.md
│   │   │   ├── positions/
│   │   │   │   ├── point-guard.md
│   │   │   │   ├── shooting-guard.md
│   │   │   │   ├── small-forward.md
│   │   │   │   ├── power-forward.md
│   │   │   │   └── center.md
│   │   │   ├── advanced/
│   │   │   └── mental-game/
│   │   │
│   │   ├── pathways/
│   │   │   ├── _index.md
│   │   │   ├── youth-to-college.md
│   │   │   ├── college-recruiting.md
│   │   │   ├── going-pro.md
│   │   │   ├── playing-overseas.md
│   │   │   └── career-after-playing.md
│   │   │
│   │   ├── records/
│   │   │   ├── _index.md
│   │   │   ├── wnba-records.md
│   │   │   ├── ncaa-records.md
│   │   │   ├── olympic-records.md
│   │   │   └── international-records.md
│   │   │
│   │   ├── glossary/
│   │   │   └── _index.md
│   │   │
│   │   └── about/
│   │       ├── _index.md
│   │       ├── contributors.md
│   │       └── partners.md
│   │
│   ├── es/                        # Spanish content (mirrors en/)
│   │   ├── _index.md
│   │   ├── jugadoras/             # players
│   │   ├── equipos/               # teams
│   │   ├── ligas/                 # leagues
│   │   ├── competiciones/         # competitions
│   │   ├── leyendas/              # legends
│   │   ├── entrenadoras/          # coaches
│   │   ├── entrenamiento/         # training
│   │   ├── caminos/               # pathways
│   │   ├── records/
│   │   ├── glosario/              # glossary
│   │   └── sobre/                 # about
│   │
│   └── fr/                        # French content (mirrors en/)
│       ├── _index.md
│       ├── joueuses/              # players
│       ├── equipes/               # teams
│       ├── ligues/                # leagues
│       ├── competitions/
│       ├── legendes/              # legends
│       ├── entraineurs/           # coaches
│       ├── formation/             # training
│       ├── parcours/              # pathways
│       ├── records/
│       ├── glossaire/             # glossary
│       └── a-propos/              # about
│
├── data/
│   ├── players/                   # Player data (JSON/YAML)
│   │   ├── wnba.json
│   │   ├── euroleague.json
│   │   └── ...
│   │
│   ├── teams/
│   │   ├── wnba.json
│   │   ├── ncaa.json
│   │   └── ...
│   │
│   ├── leagues/
│   │   └── all-leagues.json
│   │
│   ├── stats/
│   │   ├── career-leaders.json
│   │   ├── season-records.json
│   │   └── ...
│   │
│   ├── achievements/              # Gamification badges
│   │   └── badges.json
│   │
│   └── i18n/                      # Translation strings
│       ├── en.json
│       ├── es.json
│       └── fr.json
│
├── i18n/
│   ├── en.toml                    # English translations
│   ├── es.toml                    # Spanish translations
│   └── fr.toml                    # French translations
│
├── layouts/
│   ├── _default/
│   │   ├── baseof.html            # Base template
│   │   ├── list.html              # List pages
│   │   ├── single.html            # Single pages
│   │   ├── section.html           # Section pages
│   │   └── taxonomy.html          # Taxonomy pages
│   │
│   ├── partials/
│   │   ├── head/
│   │   │   ├── meta.html          # Meta tags
│   │   │   ├── seo.html           # SEO meta
│   │   │   ├── schema.html        # JSON-LD schemas
│   │   │   ├── hreflang.html      # Language alternates
│   │   │   └── critical-css.html  # Inline critical CSS
│   │   │
│   │   ├── header/
│   │   │   ├── navbar.html        # Main navigation
│   │   │   ├── mobile-menu.html   # Mobile navigation
│   │   │   ├── language-switcher.html
│   │   │   └── search-modal.html
│   │   │
│   │   ├── footer/
│   │   │   ├── footer.html
│   │   │   ├── newsletter.html
│   │   │   └── social-links.html
│   │   │
│   │   ├── components/
│   │   │   ├── player-card.html
│   │   │   ├── team-card.html
│   │   │   ├── stat-display.html
│   │   │   ├── achievement-badge.html
│   │   │   ├── comparison-tool.html
│   │   │   ├── timeline.html
│   │   │   ├── breadcrumbs.html
│   │   │   ├── table-of-contents.html
│   │   │   ├── related-content.html
│   │   │   ├── faq-section.html
│   │   │   └── share-buttons.html
│   │   │
│   │   ├── stats/
│   │   │   ├── stat-table.html
│   │   │   ├── career-chart.html
│   │   │   ├── comparison-radar.html
│   │   │   └── leaderboard.html
│   │   │
│   │   └── gamification/
│   │       ├── hero-level.html
│   │       ├── badge-showcase.html
│   │       └── progress-ring.html
│   │
│   ├── players/
│   │   ├── list.html              # Player directory
│   │   └── single.html            # Player profile
│   │
│   ├── teams/
│   │   ├── list.html              # Team directory
│   │   └── single.html            # Team profile
│   │
│   ├── leagues/
│   │   ├── list.html              # League directory
│   │   └── single.html            # League profile
│   │
│   ├── training/
│   │   ├── list.html              # Training directory
│   │   └── single.html            # Training guide
│   │
│   ├── legends/
│   │   ├── list.html              # Legends hall
│   │   └── single.html            # Legend profile
│   │
│   ├── coaches/
│   │   ├── list.html
│   │   └── single.html
│   │
│   ├── index.html                 # Homepage
│   │
│   ├── shortcodes/
│   │   ├── player-stats.html
│   │   ├── team-roster.html
│   │   ├── comparison.html
│   │   ├── video-embed.html
│   │   ├── quote.html
│   │   ├── callout.html
│   │   ├── faq.html
│   │   ├── achievement.html
│   │   └── stat-card.html
│   │
│   └── robots.txt
│
├── static/
│   ├── fonts/
│   │   └── (web fonts if self-hosted)
│   │
│   ├── images/
│   │   ├── og/                    # Open Graph images
│   │   └── logos/
│   │
│   └── _headers                   # Cloudflare headers
│
├── .gitignore
├── .nvmrc
├── hugo.toml                      # Main config (imports config/)
├── netlify.toml                   # (Optional) Netlify config
├── package.json                   # Node dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind configuration
└── README.md                      # This file
```

---

## 📚 Content Architecture

### Content Taxonomy

```
                           ┌──────────────────┐
                           │  HEROBASKETBALL  │
                           │     (Root)       │
                           └────────┬─────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       │                            │                            │
       ▼                            ▼                            ▼
┌──────────────┐           ┌──────────────┐           ┌──────────────┐
│   PEOPLE     │           │ ORGANIZATIONS │           │   CONTENT    │
└──────┬───────┘           └──────┬───────┘           └──────┬───────┘
       │                          │                          │
       ├── Players               ├── Teams                  ├── Training
       │   ├── Current           │   ├── By League          │   ├── Fundamentals
       │   ├── Legends           │   └── By Country         │   ├── Positions
       │   └── By Position       │                          │   ├── Advanced
       │                         ├── Leagues                │   └── Mental Game
       ├── Coaches               │   ├── Professional       │
       │   ├── Current           │   ├── Collegiate         ├── Pathways
       │   └── Legendary         │   └── Development        │   ├── Youth → College
       │                         │                          │   ├── Recruiting
       └── Contributors          ├── Competitions           │   ├── Going Pro
           └── Partners          │   ├── World Cup          │   └── After Playing
                                 │   ├── Olympics           │
                                 │   ├── Continental        ├── Records
                                 │   └── Club Competitions  │   ├── By League
                                 │                          │   └── By Category
                                 └── National Teams         │
                                                            ├── History
                                                            │   ├── Eras
                                                            │   ├── Milestones
                                                            │   └── Evolution
                                                            │
                                                            └── Glossary
```

### Page Count Projections

| Content Type | Year 1 | Year 2 | Ultimate |
|-------------|--------|--------|----------|
| **Player Profiles** | 500 | 1,500 | 5,000+ |
| **Team Pages** | 150 | 300 | 500+ |
| **League Pages** | 50 | 100 | 150+ |
| **Competition Pages** | 100 | 250 | 500+ |
| **Training Guides** | 50 | 100 | 200+ |
| **Historical Content** | 100 | 250 | 500+ |
| **Records/Stats Pages** | 100 | 200 | 400+ |
| **Glossary Terms** | 200 | 400 | 600+ |
| **Coach Profiles** | 50 | 150 | 300+ |
| **Pathway Guides** | 20 | 50 | 100+ |
| **TOTAL (English)** | **1,320** | **3,300** | **8,250+** |
| **× 3 Languages** | **3,960** | **9,900** | **24,750+** |

---

## 🎮 The Hero Experience (UX)

### Core Design Philosophy

HeroBasketball isn't just a reference site—it's an **experience**. Every interaction should feel:

1. **Rewarding** — Progress and discovery feel meaningful
2. **Discoverable** — Deep rabbit holes of connected content
3. **Competitive** — Stats and comparisons front and center
4. **Celebratory** — Players and achievements showcased as heroic
5. **Accessible** — Works perfectly on any device, any connection

### The Gamification Layer

#### Hero Levels

Users progress through levels based on exploration:

```
┌─────────────────────────────────────────────────────────────┐
│  🌱 ROOKIE        → First visit, browsed 5 pages           │
│  🏀 STARTER       → Explored 25 pages, 3 sections          │
│  ⭐ ALL-STAR      → 100 pages, used comparison tool        │
│  🏆 CHAMPION      → 250 pages, all sections explored       │
│  👑 LEGEND        → 500+ pages, return visitor (7+ days)   │
│  🦸 HERO          → Shared content, contributed data       │
└─────────────────────────────────────────────────────────────┘
```

#### Achievement Badges

Unlockable badges for specific actions:

| Badge | Name | Criteria |
|-------|------|----------|
| 🌍 | **Globe Trotter** | Visited leagues from 5+ countries |
| 📊 | **Stat Nerd** | Used comparison tool 10+ times |
| 📜 | **Historian** | Read 20+ legend profiles |
| 🏫 | **Scholar** | Explored all training sections |
| 🔍 | **Detective** | Used search 25+ times |
| 🌙 | **Night Owl** | Browsed in dark mode |
| 🌐 | **Polyglot** | Switched languages |
| 🏀 | **True Fan** | Visited same team 5+ times |
| 📱 | **On The Go** | Mobile power user |
| ⚡ | **Speed Demon** | Rapid navigation (keyboard) |

#### Progress Visualization

```html
<!-- Hero Level Display -->
<div class="hero-level-card">
  <div class="level-ring" data-progress="67">
    <svg class="progress-ring">
      <circle class="progress-ring__circle" />
    </svg>
    <span class="level-icon">⭐</span>
  </div>
  <div class="level-info">
    <span class="level-name">ALL-STAR</span>
    <span class="level-progress">67/100 to CHAMPION</span>
  </div>
</div>
```

### Interactive Features

#### 1. Player Comparison Tool

Side-by-side stat comparisons with radar charts:

```
┌─────────────────────────────────────────────────────────────┐
│                    COMPARE PLAYERS                          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐         ┌─────────────────┐           │
│  │  Caitlin Clark  │   VS    │   A'ja Wilson   │           │
│  │  Indiana Fever  │         │  Las Vegas Aces │           │
│  └─────────────────┘         └─────────────────┘           │
│                                                             │
│              [RADAR CHART VISUALIZATION]                    │
│                                                             │
│  Points:   22.1  ████████████░░░░░  27.1                   │
│  Rebounds:  5.5  ███████░░░░░░░░░░  11.9                   │
│  Assists:   8.4  ████████████████░   5.0                   │
│  Steals:    1.4  ██████████░░░░░░░   1.8                   │
│  Blocks:    0.7  ████░░░░░░░░░░░░░   2.6                   │
│                                                             │
│  [Add Player +]        [Share Comparison 🔗]                │
└─────────────────────────────────────────────────────────────┘
```

#### 2. Timeline Explorer

Interactive historical journey through women's basketball:

```
1892 ─●─ Senda Berenson adapts basketball for women
      │
1972 ─●─ Title IX passes
      │
1976 ─●─ Women's basketball debuts at Olympics
      │
1996 ─●─ WNBA founded ← [CLICK TO EXPLORE]
      │
2023 ─●─ NCAA Women's Final sets viewership record
      │
2024 ─●─ Caitlin Clark draft breaks barriers ← [YOU ARE HERE]
```

#### 3. Discovery Paths

Guided journeys through content:

```
┌─────────────────────────────────────────────────────────────┐
│  🗺️ DISCOVERY PATHS                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🌟 The WNBA Journey                                        │
│  Follow a player from draft to All-Star                     │
│  [Start Path →]                                             │
│                                                             │
│  🌍 Around the World                                        │
│  Explore women's basketball on every continent              │
│  [Start Path →]                                             │
│                                                             │
│  📚 From Berenson to Today                                  │
│  The complete history in 20 stops                           │
│  [Start Path →]                                             │
│                                                             │
│  🏫 Coaching Legends                                        │
│  The philosophies that shaped the game                      │
│  [Start Path →]                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### 4. Quick Stats Cards

Swipeable stat cards on mobile:

```
┌─────────────────────────────────────────────────────────────┐
│  ← SWIPE FOR MORE →                                         │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │    TODAY    │  │   LEADERS   │  │   RECORDS   │         │
│  │             │  │             │  │             │         │
│  │  🏀 4 games │  │  PPG: A'ja  │  │  Single     │         │
│  │  📺 ESPN2   │  │  27.1       │  │  Game: 53   │         │
│  │             │  │             │  │  Riquna     │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Navigation Philosophy

#### Mobile-First Navigation

```
┌─────────────────────────────────────────────────────────────┐
│  MOBILE BOTTOM NAV (Fixed)                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🏠          👤          🏆          📚          🔍        │
│   Home      Players      Leagues    Training    Search     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Mega Menu (Desktop)

```
┌─────────────────────────────────────────────────────────────┐
│  PLAYERS ▼                                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  BY LEAGUE          BY POSITION       SPECIAL              │
│  ──────────         ──────────        ──────────           │
│  WNBA               Point Guards      Legends              │
│  NCAA               Shooting Guards   Rising Stars         │
│  EuroLeague         Small Forwards    Rookies              │
│  Liga Femenina      Power Forwards    International        │
│  LFB France         Centers                                │
│  WCBA China                           [View All Players →] │
│  See All Leagues →                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Micro-Interactions

Every interaction has feedback:

| Action | Feedback |
|--------|----------|
| **Hover on player card** | Card lifts, stats preview appears |
| **Add to comparison** | Satisfying "pop" animation + haptic |
| **Complete reading** | Progress bar fills, achievement check |
| **Switch language** | Smooth fade transition |
| **Toggle dark mode** | Elegant theme morph |
| **Load more content** | Skeleton → content fade-in |
| **Share content** | Celebration confetti burst |

---

## 🎨 Design System

### Color Palette

```css
/* Primary */
--hero-purple: #5B2C6F;       /* Main brand */
--hero-purple-light: #7D3C98;
--hero-purple-dark: #4A235A;

/* Accent */
--hero-gold: #D4AC0D;         /* Highlights, achievements */
--hero-gold-light: #F4D03F;
--hero-gold-dark: #B7950B;

/* Secondary */
--hero-coral: #E74C3C;        /* CTAs, alerts */
--hero-teal: #17A2B8;         /* Links, info */

/* Neutrals */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;

/* Semantic */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;

/* Dark Mode */
--dark-bg: #0F0F1A;
--dark-surface: #1A1A2E;
--dark-surface-2: #25253D;
```

### Typography

```css
/* Font Stack */
--font-display: 'Outfit', system-ui, sans-serif;     /* Headlines */
--font-body: 'Inter', system-ui, sans-serif;         /* Body text */
--font-mono: 'JetBrains Mono', monospace;            /* Stats, code */

/* Scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px - Hero headlines */
--text-7xl: 4.5rem;      /* 72px - Impact numbers */
```

### Component Library

#### Player Card

```html
<article class="player-card group">
  <div class="player-card__image">
    <img src="..." alt="..." loading="lazy" />
    <div class="player-card__badge">
      <span class="badge badge--gold">All-Star</span>
    </div>
  </div>
  <div class="player-card__content">
    <h3 class="player-card__name">Caitlin Clark</h3>
    <p class="player-card__team">Indiana Fever</p>
    <div class="player-card__stats">
      <span class="stat">22.1 PPG</span>
      <span class="stat">8.4 APG</span>
    </div>
  </div>
  <div class="player-card__hover opacity-0 group-hover:opacity-100">
    <button class="btn btn--compare">Compare</button>
    <button class="btn btn--view">View Profile</button>
  </div>
</article>
```

#### Stat Display

```html
<div class="stat-display stat-display--large">
  <span class="stat-display__value">27.1</span>
  <span class="stat-display__label">Points Per Game</span>
  <span class="stat-display__rank text-hero-gold">#1 in WNBA</span>
</div>
```

#### Achievement Badge

```html
<div class="achievement achievement--unlocked">
  <div class="achievement__icon">
    <span class="achievement__emoji">🌍</span>
    <div class="achievement__glow"></div>
  </div>
  <div class="achievement__info">
    <span class="achievement__name">Globe Trotter</span>
    <span class="achievement__desc">Visited 5+ international leagues</span>
  </div>
  <div class="achievement__date">Unlocked today</div>
</div>
```

### Responsive Breakpoints

```css
/* Mobile First */
/* Default: 0-639px (Mobile) */

/* Tablet */
@media (min-width: 640px) { /* sm */ }

/* Small Desktop */
@media (min-width: 768px) { /* md */ }

/* Desktop */
@media (min-width: 1024px) { /* lg */ }

/* Large Desktop */
@media (min-width: 1280px) { /* xl */ }

/* Extra Large */
@media (min-width: 1536px) { /* 2xl */ }
```

### Animation System

```css
/* Timing Functions */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1);

/* Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Common Animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(212, 172, 13, 0.3); }
  50% { box-shadow: 0 0 40px rgba(212, 172, 13, 0.6); }
}

@keyframes confetti {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
}
```

---

## 🔍 SEO & AEO Strategy

### On-Page SEO

#### Title Tag Pattern

```
{Page Title} | {Section} | HeroBasketball
```

Examples:
- `Caitlin Clark Stats, Bio & Career | Players | HeroBasketball`
- `WNBA 2024 Season Guide | Leagues | HeroBasketball`
- `Point Guard Training Drills | Training | HeroBasketball`

#### Meta Description Pattern

```
{Hook sentence under 60 chars}. {Value proposition}. {CTA or scope}.
```

Examples:
- `Caitlin Clark's complete career stats, biography, and game logs. The definitive profile of the WNBA's rising star. Updated for 2024 season.`
- `Master point guard skills with pro-level training guides. Free drills, techniques, and coaching tips for players of all levels.`

### Content Structure for AEO

Every page follows this structure for AI extraction:

```markdown
# {Primary Heading - The Question/Topic}

{Direct answer in first 40-60 words - this is what AI will cite}

## Quick Facts
{Structured data in list or table format}

## {Section 2}
{Detailed content with clear subheadings}

## {Section 3}
{More detailed content}

## Frequently Asked Questions

### {Question 1}?
{Concise answer}

### {Question 2}?
{Concise answer}

## Related Content
{Internal links to related pages}
```

### Featured Snippet Optimization

Target these snippet types:

| Type | Format | Example |
|------|--------|---------|
| **Paragraph** | First 40-60 words | Player bios, definitions |
| **List** | Numbered/bulleted | Top 10 lists, steps |
| **Table** | Structured data | Stats comparisons, records |
| **Video** | Embedded content | Training demonstrations |

### Internal Linking Strategy

```
┌─────────────────────────────────────────────────────────────┐
│  LINKING ARCHITECTURE                                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PLAYER PAGE:                                                │
│  ├── → Current Team Page                                     │
│  ├── → League Page                                           │
│  ├── → Related Players (same position/team)                  │
│  ├── → Training Content (for their position)                 │
│  ├── → Historical Comparisons (legends at same position)     │
│  └── → Career Pathway (how they got to pros)                │
│                                                              │
│  TEAM PAGE:                                                  │
│  ├── → All Player Profiles                                   │
│  ├── → League Page                                           │
│  ├── → Coach Profile                                         │
│  ├── → Rival Teams                                           │
│  └── → Championship History                                  │
│                                                              │
│  TRAINING PAGE:                                              │
│  ├── → Player Examples (who excels at this skill)            │
│  ├── → Related Skills                                        │
│  ├── → Position Pages                                        │
│  └── → Coach Philosophies                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Sitemap Strategy

```xml
<!-- Generate separate sitemaps per language and section -->
<sitemapindex>
  <sitemap>
    <loc>https://herobasketball.com/en/sitemap-players.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://herobasketball.com/en/sitemap-teams.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://herobasketball.com/en/sitemap-leagues.xml</loc>
  </sitemap>
  <!-- Repeat for es/ and fr/ -->
</sitemapindex>
```

---

## 🌐 Trilingual Implementation

### Language Configuration

```toml
# config/_default/languages.toml

[en]
  languageName = "English"
  languageCode = "en-US"
  contentDir = "content/en"
  weight = 1
  [en.params]
    dateFormat = "January 2, 2006"

[es]
  languageName = "Español"
  languageCode = "es"
  contentDir = "content/es"
  weight = 2
  [es.params]
    dateFormat = "2 de January de 2006"

[fr]
  languageName = "Français"
  languageCode = "fr"
  contentDir = "content/fr"
  weight = 3
  [fr.params]
    dateFormat = "2 janvier 2006"
```

### Translation File Structure

```toml
# i18n/en.toml
[nav_players]
other = "Players"

[nav_teams]
other = "Teams"

[nav_leagues]
other = "Leagues"

[nav_training]
other = "Training"

[stat_ppg]
other = "Points Per Game"

[stat_rpg]
other = "Rebounds Per Game"

[stat_apg]
other = "Assists Per Game"

[cta_compare]
other = "Compare"

[cta_view_profile]
other = "View Profile"

[achievement_unlocked]
other = "Achievement Unlocked!"
```

```toml
# i18n/es.toml
[nav_players]
other = "Jugadoras"

[nav_teams]
other = "Equipos"

[nav_leagues]
other = "Ligas"

[nav_training]
other = "Entrenamiento"

[stat_ppg]
other = "Puntos Por Partido"

[stat_rpg]
other = "Rebotes Por Partido"

[stat_apg]
other = "Asistencias Por Partido"

[cta_compare]
other = "Comparar"

[cta_view_profile]
other = "Ver Perfil"

[achievement_unlocked]
other = "¡Logro Desbloqueado!"
```

```toml
# i18n/fr.toml
[nav_players]
other = "Joueuses"

[nav_teams]
other = "Équipes"

[nav_leagues]
other = "Ligues"

[nav_training]
other = "Formation"

[stat_ppg]
other = "Points Par Match"

[stat_rpg]
other = "Rebonds Par Match"

[stat_apg]
other = "Passes Par Match"

[cta_compare]
other = "Comparer"

[cta_view_profile]
other = "Voir Profil"

[achievement_unlocked]
other = "Succès Débloqué!"
```

### Hreflang Implementation

```html
<!-- layouts/partials/head/hreflang.html -->
{{ $translations := .Translations }}
{{ $currentLang := .Lang }}

<link rel="alternate" hreflang="{{ .Lang }}" href="{{ .Permalink }}" />

{{ range $translations }}
  <link rel="alternate" hreflang="{{ .Lang }}" href="{{ .Permalink }}" />
{{ end }}

<!-- x-default points to English -->
{{ if eq $currentLang "en" }}
  <link rel="alternate" hreflang="x-default" href="{{ .Permalink }}" />
{{ else }}
  {{ range where $translations "Lang" "en" }}
    <link rel="alternate" hreflang="x-default" href="{{ .Permalink }}" />
  {{ end }}
{{ end }}
```

### Language Switcher Component

```html
<!-- layouts/partials/header/language-switcher.html -->
<div class="language-switcher" x-data="{ open: false }">
  <button @click="open = !open" class="language-switcher__trigger">
    <span class="language-switcher__current">
      {{ if eq .Lang "en" }}🇺🇸 EN{{ end }}
      {{ if eq .Lang "es" }}🇪🇸 ES{{ end }}
      {{ if eq .Lang "fr" }}🇫🇷 FR{{ end }}
    </span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  
  <div x-show="open" @click.away="open = false" class="language-switcher__dropdown">
    {{ range .Translations }}
      <a href="{{ .Permalink }}" class="language-switcher__option">
        {{ if eq .Lang "en" }}🇺🇸 English{{ end }}
        {{ if eq .Lang "es" }}🇪🇸 Español{{ end }}
        {{ if eq .Lang "fr" }}🇫🇷 Français{{ end }}
      </a>
    {{ end }}
    
    <!-- Fallback to homepage if no translation exists -->
    {{ if not .Translations }}
      {{ range site.Languages }}
        {{ if ne .Lang $.Lang }}
          <a href="{{ .LanguagePrefix }}/" class="language-switcher__option">
            {{ if eq .Lang "en" }}🇺🇸 English{{ end }}
            {{ if eq .Lang "es" }}🇪🇸 Español{{ end }}
            {{ if eq .Lang "fr" }}🇫🇷 Français{{ end }}
          </a>
        {{ end }}
      {{ end }}
    {{ end }}
  </div>
</div>
```

---

## 📄 Page Templates

### Player Profile Template

```markdown
---
# content/en/players/c/caitlin-clark.md

title: "Caitlin Clark"
description: "Complete career stats, biography, and game logs for Caitlin Clark. WNBA Indiana Fever point guard, NCAA all-time leading scorer."
date: 2024-01-01
lastmod: 2024-12-01

# Taxonomy
type: "players"
position: "Point Guard"
league: "wnba"
team: "indiana-fever"
nationality: "USA"
status: "active"

# Player Data
player:
  firstName: "Caitlin"
  lastName: "Clark"
  fullName: "Caitlin Elizabeth Clark"
  birthDate: "2002-01-22"
  birthPlace: "Des Moines, Iowa, USA"
  height: "6-0"
  heightCm: 183
  college: "Iowa"
  draftYear: 2024
  draftRound: 1
  draftPick: 1
  jerseyNumber: 22
  
# Career Stats (Summary)
stats:
  wnba:
    seasons: 1
    gamesPlayed: 40
    ppg: 19.2
    rpg: 5.7
    apg: 8.4
    spg: 1.3
    fgPct: 41.7
    threePct: 34.4
    ftPct: 90.6
  
  college:
    seasons: 4
    gamesPlayed: 141
    ppg: 28.4
    rpg: 7.1
    apg: 8.6
    
# Achievements
achievements:
  - "2024 WNBA Rookie of the Year"
  - "2024 WNBA All-Star"
  - "NCAA All-Time Leading Scorer"
  - "4x All-American"
  - "2x Naismith Player of the Year"

# Social
social:
  instagram: "caitlinclark22"
  twitter: "CaitlinClark22"
  
# SEO
seo:
  title: "Caitlin Clark Stats, Bio & Career | HeroBasketball"
  image: "/images/players/caitlin-clark-og.jpg"
  
# Schema
schema:
  type: "Person"
  sameAs:
    - "https://www.wikidata.org/wiki/Q56879869"
    - "https://en.wikipedia.org/wiki/Caitlin_Clark"
    
# Translations
translationKey: "caitlin-clark"
---

Caitlin Clark is an American professional basketball player for the Indiana Fever in the WNBA. The first overall pick in the 2024 WNBA Draft, Clark is the NCAA Division I all-time leading scorer and revolutionized women's college basketball with her long-range shooting and court vision.

## Quick Facts

| Attribute | Value |
|-----------|-------|
| **Position** | Point Guard |
| **Team** | Indiana Fever |
| **Height** | 6-0 (183 cm) |
| **College** | Iowa (2020-2024) |
| **Draft** | 2024 Round 1, Pick 1 |
| **Nationality** | 🇺🇸 United States |

## Career Statistics

### WNBA Career

{{< stat-table type="wnba" player="caitlin-clark" >}}

### College Career (Iowa)

{{< stat-table type="college" player="caitlin-clark" >}}

## Biography

### Early Life

Caitlin Clark was born on January 22, 2002, in Des Moines, Iowa...

### College Career

At the University of Iowa, Clark became the most decorated player in program history...

### Professional Career

Selected first overall by the Indiana Fever in 2024...

## Achievements & Awards

{{< achievements player="caitlin-clark" >}}

## Game Log

{{< game-log player="caitlin-clark" season="2024" >}}

## Similar Players

{{< related-players position="point-guard" league="wnba" exclude="caitlin-clark" limit="4" >}}

## Frequently Asked Questions

### How many points did Caitlin Clark score in college?

Caitlin Clark scored 3,951 points during her college career at Iowa (2020-2024), making her the NCAA Division I all-time leading scorer for both men's and women's basketball.

### When was Caitlin Clark drafted?

Caitlin Clark was selected first overall by the Indiana Fever in the 2024 WNBA Draft on April 15, 2024.

### What is Caitlin Clark's jersey number?

Caitlin Clark wears jersey number 22 for the Indiana Fever, the same number she wore at Iowa.
```

### Team Profile Template

```markdown
---
# content/en/teams/wnba/indiana-fever.md

title: "Indiana Fever"
description: "Complete guide to the Indiana Fever - roster, schedule, history, championships, and stats. WNBA franchise based in Indianapolis."
date: 2024-01-01
lastmod: 2024-12-01

# Taxonomy
type: "teams"
league: "wnba"
conference: "Eastern"
location: "Indianapolis, Indiana"
country: "USA"

# Team Data
team:
  name: "Indiana Fever"
  shortName: "Fever"
  abbreviation: "IND"
  founded: 2000
  arena: "Gainbridge Fieldhouse"
  arenaCapacity: 17274
  colors:
    primary: "#002D62"
    secondary: "#E03A3E"
    tertiary: "#FFC72C"
  headCoach: "Christie Sides"
  generalManager: "Amber Cox"
  owner: "Herb Simon"
  
# Championships
championships:
  wnba: 1
  conference: 5
  
# All-Time Stats
allTime:
  wins: 267
  losses: 351
  playoffAppearances: 12
  
# Social
social:
  instagram: "indianafever"
  twitter: "IndianaFever"
  website: "https://fever.wnba.com"

# SEO
seo:
  title: "Indiana Fever | Roster, Schedule, History | HeroBasketball"
  image: "/images/teams/indiana-fever-og.jpg"

# Schema
schema:
  type: "SportsTeam"
  
translationKey: "indiana-fever"
---

The Indiana Fever are a professional women's basketball team based in Indianapolis, competing in the WNBA's Eastern Conference. Founded in 2000, the Fever won their only WNBA championship in 2012 led by Tamika Catchings.

## Quick Facts

| Attribute | Value |
|-----------|-------|
| **League** | WNBA (Eastern Conference) |
| **Founded** | 2000 |
| **Arena** | Gainbridge Fieldhouse |
| **Championships** | 1 (2012) |
| **Head Coach** | Christie Sides |

## Current Roster

{{< team-roster team="indiana-fever" season="2024" >}}

## Season Schedule

{{< team-schedule team="indiana-fever" season="2024" >}}

## Team History

### Franchise Origins (2000)

The Indiana Fever were founded as a WNBA expansion team in 2000...

### Championship Era (2009-2016)

Led by Tamika Catchings, the Fever reached four WNBA Finals...

### Rebuilding and New Era (2017-Present)

The 2024 arrival of Caitlin Clark marks a new chapter...

## Championships & Titles

{{< championship-history team="indiana-fever" >}}

## All-Time Leaders

{{< all-time-leaders team="indiana-fever" >}}

## Legends

{{< team-legends team="indiana-fever" >}}

## FAQ

### When did the Indiana Fever win their championship?

The Indiana Fever won their only WNBA championship in 2012, defeating the Minnesota Lynx 3-1 in the Finals.

### Who is the Indiana Fever's all-time leading scorer?

Tamika Catchings is the Indiana Fever's all-time leading scorer with 7,380 career points.
```

### Training Guide Template

```markdown
---
# content/en/training/fundamentals/shooting.md

title: "Basketball Shooting Fundamentals"
description: "Master shooting form, mechanics, and drills used by WNBA players. Complete guide to becoming a better scorer at any level."
date: 2024-01-01
lastmod: 2024-12-01

# Taxonomy
type: "training"
category: "fundamentals"
difficulty: "beginner"
positions: ["all"]

# Training Data
training:
  duration: "45-60 minutes"
  equipment:
    - "Basketball"
    - "Hoop"
    - "Cones (optional)"
  skillLevel: "Beginner to Advanced"
  
# Related Players (examples of skill)
playerExamples:
  - "diana-taurasi"
  - "caitlin-clark"
  - "kahleah-copper"

# Related Content
relatedSkills:
  - "free-throws"
  - "three-point-shooting"
  - "mid-range-game"

# SEO
seo:
  title: "Basketball Shooting Fundamentals | Training | HeroBasketball"
  image: "/images/training/shooting-og.jpg"

# Schema
schema:
  type: "HowTo"
  
translationKey: "shooting-fundamentals"
---

Shooting is the most fundamental offensive skill in basketball. This comprehensive guide breaks down proper shooting form, mechanics, and drills used by WNBA players to develop elite scoring ability.

## Quick Overview

| Aspect | Detail |
|--------|--------|
| **Skill Level** | Beginner to Advanced |
| **Time Required** | 45-60 minutes |
| **Equipment** | Basketball, Hoop |
| **Key Focus** | Form, Consistency, Range |

## The BEEF Method

The foundation of good shooting follows the BEEF principle:

### B - Balance
Start with feet shoulder-width apart, knees slightly bent...

### E - Eyes
Focus on the target (back of the rim)...

### E - Elbow
Keep your shooting elbow aligned under the ball...

### F - Follow Through
Extend fully and hold your follow-through...

## Step-by-Step Guide

{{< howto >}}

### Step 1: Set Your Base
Position your feet shoulder-width apart with your shooting foot slightly forward...

### Step 2: Grip the Ball
Place your shooting hand under the ball with fingers spread...

### Step 3: Load and Lift
Bring the ball to your set point in one smooth motion...

### Step 4: Release
Extend through the ball with a high release point...

### Step 5: Follow Through
Snap your wrist and hold your follow-through ("cookie jar")...

{{< /howto >}}

## Drills

### Drill 1: Form Shooting (10 minutes)
Start 3 feet from the basket...

{{< video src="form-shooting-drill" >}}

### Drill 2: Spot Shooting (15 minutes)
Move to five spots around the key...

### Drill 3: Catch and Shoot (15 minutes)
Work with a partner or rebounder...

## Pro Tips

{{< quote author="Diana Taurasi" source="HeroBasketball Interview" >}}
"I shot thousands of shots before every practice. Muscle memory doesn't lie."
{{< /quote >}}

## Players to Study

{{< player-examples skill="shooting" >}}

## Common Mistakes

1. **Thumbing the ball** - Using your off-hand thumb on the release
2. **Inconsistent set point** - Varying where you start your shot
3. **Jumping forward** - Drifting into your shot

## FAQ

### How many shots should I take per day?

Most professional players recommend 300-500 quality shots per day...

### At what age should kids start shooting drills?

Basic form work can begin around age 6-7...

## Related Training

{{< related-training category="fundamentals" exclude="shooting" limit="4" >}}
```

---

## 📊 Schema Markup

### Person Schema (Players)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://herobasketball.com/en/players/c/caitlin-clark/#person",
  "name": "Caitlin Clark",
  "givenName": "Caitlin",
  "familyName": "Clark",
  "birthDate": "2002-01-22",
  "birthPlace": {
    "@type": "Place",
    "name": "Des Moines, Iowa, USA"
  },
  "nationality": {
    "@type": "Country",
    "name": "United States"
  },
  "height": {
    "@type": "QuantitativeValue",
    "value": 183,
    "unitCode": "CMT"
  },
  "jobTitle": "Professional Basketball Player",
  "memberOf": {
    "@type": "SportsTeam",
    "name": "Indiana Fever",
    "sport": "Basketball",
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "WNBA"
    }
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Iowa"
  },
  "award": [
    "2024 WNBA Rookie of the Year",
    "NCAA All-Time Leading Scorer"
  ],
  "sameAs": [
    "https://www.wikidata.org/wiki/Q56879869",
    "https://en.wikipedia.org/wiki/Caitlin_Clark",
    "https://www.instagram.com/caitlinclark22/",
    "https://twitter.com/CaitlinClark22"
  ],
  "image": "https://herobasketball.com/images/players/caitlin-clark.jpg",
  "url": "https://herobasketball.com/en/players/c/caitlin-clark/"
}
```

### SportsTeam Schema

```json
{
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  "@id": "https://herobasketball.com/en/teams/wnba/indiana-fever/#team",
  "name": "Indiana Fever",
  "sport": "Basketball",
  "gender": "Female",
  "coach": {
    "@type": "Person",
    "name": "Christie Sides"
  },
  "memberOf": {
    "@type": "SportsOrganization",
    "name": "Women's National Basketball Association",
    "alternateName": "WNBA"
  },
  "location": {
    "@type": "Place",
    "name": "Gainbridge Fieldhouse",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "addressCountry": "US"
    }
  },
  "foundingDate": "2000",
  "url": "https://herobasketball.com/en/teams/wnba/indiana-fever/",
  "sameAs": [
    "https://fever.wnba.com",
    "https://www.wikidata.org/wiki/Q1412697"
  ]
}
```

### FAQPage Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many points did Caitlin Clark score in college?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caitlin Clark scored 3,951 points during her college career at Iowa (2020-2024), making her the NCAA Division I all-time leading scorer."
      }
    },
    {
      "@type": "Question",
      "name": "When was Caitlin Clark drafted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caitlin Clark was selected first overall by the Indiana Fever in the 2024 WNBA Draft on April 15, 2024."
      }
    }
  ]
}
```

### HowTo Schema (Training)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Basketball Shooting Fundamentals",
  "description": "Master shooting form and mechanics used by WNBA players.",
  "image": "https://herobasketball.com/images/training/shooting.jpg",
  "totalTime": "PT60M",
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Basketball"
    },
    {
      "@type": "HowToSupply", 
      "name": "Basketball Hoop"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Set Your Base",
      "text": "Position your feet shoulder-width apart with your shooting foot slightly forward.",
      "image": "https://herobasketball.com/images/training/shooting-step1.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Grip the Ball",
      "text": "Place your shooting hand under the ball with fingers spread."
    }
  ]
}
```

### BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://herobasketball.com/en/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Players",
      "item": "https://herobasketball.com/en/players/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Caitlin Clark",
      "item": "https://herobasketball.com/en/players/c/caitlin-clark/"
    }
  ]
}
```

---

## ⚡ Performance Optimization

### Image Optimization

```toml
# config/_default/hugo.toml

[imaging]
  quality = 85
  resampleFilter = "Lanczos"

[imaging.exif]
  disableDate = true
  disableLatLong = true
  
[mediaTypes]
  [mediaTypes."image/avif"]
    suffixes = ["avif"]
  [mediaTypes."image/webp"]
    suffixes = ["webp"]
```

```html
<!-- Responsive Image Partial -->
{{ $img := resources.Get .src }}
{{ $avif := $img.Resize "800x webp" }}
{{ $webp := $img.Resize "800x webp" }}
{{ $fallback := $img.Resize "800x jpg" }}

<picture>
  <source srcset="{{ $avif.RelPermalink }}" type="image/avif">
  <source srcset="{{ $webp.RelPermalink }}" type="image/webp">
  <img 
    src="{{ $fallback.RelPermalink }}" 
    alt="{{ .alt }}"
    width="{{ $fallback.Width }}"
    height="{{ $fallback.Height }}"
    loading="lazy"
    decoding="async"
  >
</picture>
```

### Critical CSS

```html
<!-- layouts/partials/head/critical-css.html -->
<style>
  /* Inline critical above-the-fold CSS */
  :root{--hero-purple:#5B2C6F;--hero-gold:#D4AC0D}
  *,::after,::before{box-sizing:border-box}
  body{margin:0;font-family:Inter,system-ui,sans-serif;line-height:1.5}
  .navbar{position:sticky;top:0;z-index:50;background:#fff}
  /* ... minimal critical styles ... */
</style>

<!-- Defer non-critical CSS -->
<link rel="preload" href="{{ "css/main.css" | relURL }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="{{ "css/main.css" | relURL }}"></noscript>
```

### JavaScript Loading

```html
<!-- Defer all JavaScript -->
<script defer src="{{ "js/main.js" | relURL }}"></script>

<!-- Lazy load non-critical scripts -->
<script>
  // Load Pagefind only when search is triggered
  document.querySelector('[data-search-trigger]').addEventListener('click', () => {
    if (!window.pagefind) {
      import('/pagefind/pagefind.js').then(pf => {
        window.pagefind = pf;
        pf.init();
      });
    }
  });
</script>
```

### Font Loading

```css
/* Preload critical fonts */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Outfit';
  src: url('/fonts/Outfit-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Outfit-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

---

## 🚢 Build & Deployment

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml

name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Cache Hugo modules
        uses: actions/cache@v3
        with:
          path: /tmp/hugo_cache
          key: ${{ runner.os }}-hugo-${{ hashFiles('**/go.sum') }}
          restore-keys: |
            ${{ runner.os }}-hugo-

      - name: Build CSS
        run: npm run build:css

      - name: Build site
        env:
          HUGO_ENVIRONMENT: production
        run: hugo --gc --minify

      - name: Build Pagefind index
        run: npx pagefind --site public

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

### Package.json Scripts

```json
{
  "name": "herobasketball",
  "version": "1.0.0",
  "scripts": {
    "dev": "npm run dev:css & hugo server --buildDrafts --buildFuture",
    "dev:css": "tailwindcss -i ./assets/css/main.css -o ./assets/css/output.css --watch",
    "build:css": "tailwindcss -i ./assets/css/main.css -o ./assets/css/output.css --minify",
    "build": "npm run build:css && hugo --gc --minify",
    "build:preview": "npm run build:css && hugo --gc --minify --buildDrafts --buildFuture",
    "search": "npx pagefind --site public",
    "lint": "prettier --check .",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.10",
    "autoprefixer": "^10.4.16",
    "pagefind": "^1.0.3",
    "postcss": "^8.4.32",
    "prettier": "^3.1.1",
    "prettier-plugin-tailwindcss": "^0.5.9",
    "tailwindcss": "^3.4.0"
  }
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hero-purple': {
          DEFAULT: '#5B2C6F',
          light: '#7D3C98',
          dark: '#4A235A',
        },
        'hero-gold': {
          DEFAULT: '#D4AC0D',
          light: '#F4D03F',
          dark: '#B7950B',
        },
        'hero-coral': '#E74C3C',
        'hero-teal': '#17A2B8',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'pop': 'pop 0.3s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 172, 13, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 172, 13, 0.6)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

---

## ✍️ Content Creation Guide

### Writing Style

1. **Lead with the answer** — First 40-60 words should directly answer the page's core question
2. **Use active voice** — "Clark scored 22 points" not "22 points were scored by Clark"
3. **Be specific** — Use exact numbers, dates, and facts
4. **Keep paragraphs short** — 2-4 sentences max for mobile readability
5. **Include FAQ sections** — Cover common questions concisely

### Front Matter Checklist

Every content file must include:

- [ ] `title` — Clear, keyword-rich title
- [ ] `description` — 150-160 character meta description
- [ ] `date` — Original publish date
- [ ] `lastmod` — Last modification date
- [ ] `translationKey` — Unique key matching across languages
- [ ] Type-specific data (player stats, team info, etc.)
- [ ] `seo.title` — Optimized title tag
- [ ] `seo.image` — Open Graph image

### Content Quality Standards

| Element | Standard |
|---------|----------|
| **Accuracy** | All stats verified against official sources |
| **Freshness** | Updated within 30 days of season changes |
| **Completeness** | Every player has bio, stats, achievements |
| **Cross-linking** | Minimum 5 internal links per page |
| **FAQ** | Minimum 3 questions per major page |
| **Media** | At least one image per profile |

---

## 🤝 Partner Integration

### Partner Content Sections

Each partner gets a dedicated section:

```
/en/partners/{partner-slug}/
├── _index.md           # Partner hub page
├── series/             # Their content series
│   ├── article-1.md
│   ├── article-2.md
│   └── ...
└── author.md           # Partner author page
```

### Partner Attribution

```html
<!-- Partner Content Banner -->
<div class="partner-banner">
  <img src="/images/partners/{partner}.svg" alt="{Partner Name}" class="partner-logo">
  <div class="partner-info">
    <span class="partner-label">Expert Content by</span>
    <span class="partner-name">{Partner Name}</span>
  </div>
  <a href="/en/partners/{partner}/" class="partner-link">
    View all content →
  </a>
</div>
```

### Partner Front Matter

```yaml
---
title: "Understanding the WNBA CBA"
author:
  name: "No Cap Space WBB"
  slug: "no-cap-space-wbb"
  type: "partner"
partner:
  tier: 1
  slug: "no-cap-space-wbb"
  series: "CBA Explained"
---
```

---

## 🗺️ Roadmap

### Phase 1: Foundation (Months 1-3)
- [ ] Hugo project setup with trilingual config
- [ ] Core layouts and components
- [ ] Design system implementation
- [ ] WNBA teams and top 50 players
- [ ] Basic search functionality
- [ ] GitHub Pages deployment

### Phase 2: Expansion (Months 4-6)
- [ ] NCAA coverage (top 50 programs)
- [ ] Historical content (legends, records)
- [ ] Comparison tool
- [ ] Achievement system v1
- [ ] First partner integrations

### Phase 3: International (Months 7-9)
- [ ] EuroLeague Women coverage
- [ ] Liga Femenina (Spanish content focus)
- [ ] LFB France (French content focus)
- [ ] Training section launch
- [ ] Comment system integration

### Phase 4: Scale (Months 10-12)
- [ ] 1,000+ player profiles
- [ ] Complete NCAA conference coverage
- [ ] Asian leagues (WCBA, WKBL, WJBL)
- [ ] Advanced filtering and tools
- [ ] Full partner ecosystem

### Phase 5: Evolution (Year 2+)
- [ ] Dynamic content integration
- [ ] Video content embedding
- [ ] Community features
- [ ] Mobile app consideration
- [ ] API for third-party access

---

## 📄 License

Content is © HeroBasketball. Code is MIT licensed.

---

## 🙏 Acknowledgments

Built with love for women's basketball worldwide.

Special thanks to:
- All players, coaches, and advocates growing the game
- Our content partners and contributors
- The open-source community

---

<div align="center">

**[🏀 HeroBasketball.com](https://herobasketball.com)** — *Where Heroes Play*

Made with 💜 for the global women's basketball community

</div>
