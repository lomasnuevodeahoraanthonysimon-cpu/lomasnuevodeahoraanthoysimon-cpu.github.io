:root {
    --bg-dark: #0f172a;
    --bg-card: #1e293b;
    --accent: #38bdf8;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --border: #334155;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

/* Navbar */
.navbar {
    background-color: rgba(15, 23, 42, 0.95);
    border-bottom: 1px solid var(--border);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}
.nav-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 15px 20px;
}
.logo {
    font-size: 22px;
    font-weight: bold;
    color: var(--text-main);
    text-decoration: none;
    float: left;
}
.accent { color: var(--accent); }
.nav-links {
    float: right;
    list-style: none;
    margin-top: 5px;
}
.nav-links li {
    display: inline-block;
    margin-left: 25px;
}
.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}
.nav-links a:hover { color: var(--accent); }

/* Hero Section */
.hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 160px 20px 100px 20px;
    text-align: center;
}
.hero h1 { font-size: 48px; margin-bottom: 15px; font-weight: 800; }
.highlight { color: var(--accent); }
.subtitle { font-size: 18px; color: var(--text-muted); margin-bottom: 30px; font-weight: 400; }
.hero p { max-width: 600px; margin: 0 auto 35px auto; color: var(--text-muted); }

/* Botones */
.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    margin: 5px;
    transition: all 0.3s ease;
}
.btn.primary { background-color: var(--accent); color: var(--bg-dark); }
.btn.secondary { border: 1px solid var(--border); color: var(--text-main); }
.btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2); }

/* Componentes Generales de Secciones */
.section { max-width: 1100px; margin: 0 auto; padding: 100px 20px; clear: both; }
.section-title {
    font-size: 32px;
    margin-bottom: 40px;
    color: var(--text-main);
    border-left: 5px solid var(--accent);
    padding-left: 15px;
}
.bg-light { background-color: #141e30; max-width: 100% !important; margin: 0; padding: 100px calc((100% - 1100px)/2 + 20px); }

/* Tarjetas de Certificación */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 20px;
}
.card {
    background-color: var(--bg-card);
    border: 1px solid var(--border);
    padding: 25px;
    border-radius: 8px;
    transition: transform 0.3s;
}
.card:hover { transform: translateY(-5px); border-color: var(--accent); }
.card-icon { font-size: 30px; color: var(--accent); margin-bottom: 15px; }
.card h3 { font-size: 18px; margin-bottom: 8px; }
.issuer { color: var(--text-muted); font-size: 14px; margin-bottom: 15px; }
.badge { background-color: #0f172a; padding: 4px 10px; border-radius: 4px; font-size: 12px; color: var(--accent); font-family: monospace; }

/* Habilidades */
.skills-container { text-align: center; }
.skill-tag {
    display: inline-block;
    background-color: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-main);
    padding: 10px 20px;
    border-radius: 6px;
    margin: 8px;
    font-size: 15px;
    transition: all 0.3s;
}
.skill-tag i { color: var(--accent); margin-right: 8px; }
.skill-tag:hover { border-color: var(--accent); background-color: #0f172a; }

/* Proyectos */
.project-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border);
    padding: 30px;
    border-radius: 8px;
}
.project-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.folder-icon { font-size: 40px; color: var(--accent); }
.project-links { font-size: 20px; color: var(--text-muted); }
.project-card h3 { margin-bottom: 10px; font-size: 22px; }
.project-card p { color: var(--text-muted); margin-bottom: 20px; }
.tags span {
    display: inline-block;
    background-color: var(--bg-dark);
    padding: 4px 12px;
    font-size: 13px;
    border-radius: 4px;
    margin-right: 8px;
    color: var(--accent);
}

/* Footer */
.footer { text-align: center; padding: 40px; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 14px; margin-top: 50px; }

/* Responsive */
@media (max-width: 768px) {
    .nav-links { display: none; }
    .hero h1 { font-size: 36px; }
}
