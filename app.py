import streamlit as st
import os
import json
from datetime import datetime
import mimetypes
from data import (
    career_objective,
    skills,
    education,
    work_experience,
    extracurricular_activities,
    hackathons,
    contact_info,
    activity_calendar,
    certificates,
    personal_projects
)

# -------------------- PAGE CONFIG --------------------
st.set_page_config(
    page_title="Akash M | Portfolio",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# -------------------- GLOBAL DARK MODE + STYLES --------------------
st.markdown("""
<style>
/* Target only certificate download buttons */
button[kind="downloadButton"] {
    color: #020617 !important;
    background: linear-gradient(135deg, #38bdf8, #0ea5e9) !important;
    border-radius: 12px !important;
    border: none !important;
    font-weight: 600 !important;
    padding: 0.45rem 1rem !important;
}

button[kind="downloadButton"]:hover {
    background: linear-gradient(135deg, #0ea5e9, #38bdf8) !important;
    color: #ffffff !important;
}
</style>
""", unsafe_allow_html=True)

st.markdown("""
<style>
html, body, .stApp {
    background-color: #020617 !important;
    color: #e5e7eb !important;
    font-family: 'Segoe UI', sans-serif;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(135deg, #020617, #0f172a);
    padding: 26px;
    border-radius: 26px;
    box-shadow: 0 14px 40px rgba(0,0,0,0.75);
    margin-bottom: 18px;
    flex-wrap: wrap;
}

.header-left {
    max-width: 65%;
}

.header-right img {
    height: 210px;
    width: 210px;
    border-radius: 20px;
    border: 4px solid #38bdf8;
    object-fit: cover;
}

/* Navbar */
.navbar {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(2, 6, 23, 0.92);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(255,255,255,0.12);
    padding: 14px 0;
    margin-bottom: 30px;
}

.nav-links {
    display: flex;
    justify-content: center;
    gap: 42px;
    font-size: 15px;
    letter-spacing: 0.12em;
    flex-wrap: wrap;
}

.nav-link {
    color: #cbd5f5;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.25s ease;
}

.nav-link:hover {
    color: #38bdf8;
    transform: scale(1.15);
}

/* Cards */
.section-card {
    background: linear-gradient(135deg, #020617, #1e293b);
    padding: 28px;
    border-radius: 28px;
    margin-bottom: 26px;
    box-shadow: 0 16px 45px rgba(0,0,0,0.8);
    animation: fadeInUp 0.6s ease-in-out;
}

.project-card {
    background: linear-gradient(135deg, #020617, #1e293b);
    padding: 24px;
    border-radius: 24px;
    margin-bottom: 20px;
    transition: all 0.35s ease;
    box-shadow: 0 14px 36px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 22px 52px rgba(56,189,248,0.35);
}

/* Titles */
.section-title {
    font-size: 30px;
    font-weight: 700;
    color: #38bdf8;
    margin-bottom: 22px;
}

/* Skills */
.skill-bar {
    background: #1e293b;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 14px;
}

.skill-fill {
    height: 12px;
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
}

/* Footer */
.footer {
    text-align: center;
    color: #eee;
    margin-top: 70px;
    padding-bottom: 30px;
}

/* Animations */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(28px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Anchor scroll offset */
.section-anchor {
    scroll-margin-top: 140px;
}

/* Mobile adjustments */
@media (max-width: 768px) {
    .header {
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
    }
    .header-left {
        max-width: 100%;
    }
    .header-right img {
        height: 160px;
        width: 160px;
        margin-bottom: 12px;
    }
    .nav-links {
        gap: 18px;
        font-size: 13px;
    }
}
</style>
""", unsafe_allow_html=True)

# -------------------- VIEW COUNT & ACTIVITY TRACKING --------------------
DATA_FILE = "analytics.json"

if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump({"views": 0, "logins": {}}, f)

with open(DATA_FILE, "r") as f:
    analytics = json.load(f)

analytics["views"] += 1
today = datetime.now().strftime("%Y-%m-%d")
analytics["logins"][today] = analytics["logins"].get(today, 0) + 1

with open(DATA_FILE, "w") as f:
    json.dump(analytics, f, indent=4)

# -------------------- HEADER --------------------
col1, col2 = st.columns([3, 1])

with col1:
    st.markdown(f"""
    <div class="header-left">
        <h2>Akash M</h2>
        <p style="color:#38bdf8; font-weight:600;">
            Software Engineer / Data Enthusiast / AI Developer
        </p>
        <p>📧 {contact_info["Email"]}</p>
        <p>📞 {contact_info["Phone"]}</p>
        <p>📍 {contact_info["Location"]}</p>
        <p>
            🔗 <a href="{contact_info["LinkedIn"]}" target="_blank" style="color:#38bdf8;">LinkedIn</a> |
            <a href="{contact_info["GitHub"]}" target="_blank" style="color:#38bdf8;">GitHub</a>
        </p>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.image("./assets/profile.jpeg", use_container_width=True)

# -------------------- NAVBAR (PURE SCROLL, NO REFRESH) --------------------
sections = [
    ("Career Objective", "career"),
    ("Skills & Hackathons", "skills"),
    ("Work Experience", "work"),
    ("Extras", "extras"),
    ("Certificates", "certificates"),
    ("Projects", "projects"),
    ("Activity", "activity"),
    ("Message", "message"),
]

nav_html = "<div class='navbar'><div class='nav-links'>"
for name, key in sections:
    nav_html += f"<a href='#{key}' class='nav-link'>{name}</a>"
nav_html += "</div></div>"

st.markdown(nav_html, unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)

# -------------------- SECTIONS --------------------

# Career Objective
st.markdown("<div id='career' class='section-anchor'></div>", unsafe_allow_html=True)
st.markdown(f"""
<div class="section-card">
    <div class="section-title">🎯 Career Objective</div>
    <p>{career_objective}</p>
</div>
""", unsafe_allow_html=True)

# Skills & Hackathons
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("<div id='skills' class='section-anchor'></div>", unsafe_allow_html=True)
st.markdown("<div class='section-title'>🧠 Skills</div>", unsafe_allow_html=True)
for skill in skills:
    st.markdown(f"<strong>{skill['name']}</strong>", unsafe_allow_html=True)
    st.markdown(f"""
    <div class="skill-bar">
        <div class="skill-fill" style="width:{skill['level']}%;"></div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)

st.markdown("<div class='section-title'>🏁 Hackathons</div>", unsafe_allow_html=True)
for hack in hackathons:
    st.markdown(f"""
    <div class="project-card">
        <h4>{hack['name']}</h4>
        <p><strong>Role:</strong> {hack['role']}</p>
        <p><strong>Achievement:</strong> {hack['achievement']}</p>
    </div>
    """, unsafe_allow_html=True)

# Work Experience
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("<div id='work' class='section-anchor'></div>", unsafe_allow_html=True)
st.markdown("<div class='section-title'>💼 Work Experience</div>", unsafe_allow_html=True)
for work in work_experience:
    st.markdown(f"""
    <div class="project-card">
        <h4>{work['role']} - {work['company']}</h4>
        <p><em>{work['duration']}</em></p>
    """, unsafe_allow_html=True)
    for point in work["details"]:
        st.markdown(f"• {point}", unsafe_allow_html=True)
    st.markdown("</div>", unsafe_allow_html=True)

# Extras (Education + Extracurricular)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("<div id='extras' class='section-anchor'></div>", unsafe_allow_html=True)
st.markdown("<div class='section-title'>🎓 Education</div>", unsafe_allow_html=True)
for edu in education:
    st.markdown(f"""
    <div class="project-card">
        <h4>{edu['degree']}</h4>
        <p><strong>{edu['institution']}</strong></p>
        <p>{edu['year']} | {edu['score']}</p>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<div class='section-title'>🏆 Extracurricular Activities</div>", unsafe_allow_html=True)
for activity in extracurricular_activities:
    st.markdown(f"""
    <div class="project-card">
        <h4>{activity['title']}</h4>
        <p>{activity['description']}</p>
    </div>
    """, unsafe_allow_html=True)

# -------------------- CERTIFICATES (IMAGE HEIGHT MATCHES CARD) --------------------
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("<div id='certificates' class='section-anchor'></div>", unsafe_allow_html=True)
st.markdown("<div class='section-title'>📜 Certificates</div>", unsafe_allow_html=True)

for idx, cert in enumerate(certificates):
    file_path = cert.get("file", "").strip()
    file_exists = bool(file_path) and os.path.exists(file_path)
    file_type, _ = mimetypes.guess_type(file_path)

    is_image = file_exists and file_type and file_type.startswith("image")
    is_pdf = file_exists and file_type == "application/pdf"

    if is_image:
        col1, col2 = st.columns([1, 2])
        with col1:
            st.image(file_path, use_container_width=True)
        with col2:
            st.markdown(f"""
            <div class="project-card" style="height:100%;">
                <h4>{cert['title']}</h4>
                <p><strong>Provider:</strong> {cert['provider']}</p>
                <p><strong>Type:</strong> {cert['type']}</p>
            </div>
            """, unsafe_allow_html=True)

    else:
        st.markdown(f"""
        <div class="project-card">
            <h4>{cert['title']}</h4>
            <p><strong>Provider:</strong> {cert['provider']}</p>
            <p><strong>Type:</strong> {cert['type']}</p>
        """, unsafe_allow_html=True)

        if is_pdf:
            with open(file_path, "rb") as f:
                st.download_button(
                    label="📄 View / Download Certificate",
                    data=f,
                    file_name=os.path.basename(file_path),
                    mime="application/pdf",
                    key=f"cert_download_{idx}"
                )
        elif file_exists:
            st.markdown("⚠️ Unsupported file format.", unsafe_allow_html=True)
        else:
            st.markdown("❌ Certificate file not found.", unsafe_allow_html=True)

        st.markdown("</div>", unsafe_allow_html=True)

# -------------------- PERSONAL PROJECTS (WITH LINKS) --------------------
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("\n", unsafe_allow_html=True)
st.markdown("<div id='projects' class='section-anchor'></div>", unsafe_allow_html=True)
st.markdown("<div class='section-title'>🚀 Personal Projects</div>", unsafe_allow_html=True)
for project in personal_projects:

    link_html = ""

    if project.get("links"):
        link_html = f"""
        <p>🔗 <a href="{project['links']}" target="_blank"
        style="color:#38bdf8;">
        {project['links']}
        </a></p>
        """

    st.markdown(f"""
    <div class="project-card">
        <h4>{project['title']}</h4>
        <p>{project['description']}</p>
        {link_html}
    </div>
    """, unsafe_allow_html=True)

# -------------------- FOOTER --------------------
st.markdown("""
<div class="footer">
    <hr>
    <p>© 2026 Akash M | Built with ❤️ using Streamlit</p>
</div>
""", unsafe_allow_html=True)
