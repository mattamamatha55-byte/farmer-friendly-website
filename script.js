* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans Telugu", "Segoe UI", Arial, sans-serif;
}

body {
    background: #f4f8f1;
    color: #183b20;
}

/* HEADER */
header {
    background: linear-gradient(135deg, #1b7a3a, #4caf50);
    color: white;
    padding: 18px 6%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    font-size: 45px;
}

.logo h1 {
    font-size: 25px;
}

.logo p {
    font-size: 13px;
}

nav {
    display: flex;
    gap: 10px;
}

nav button {
    border: none;
    background: rgba(255,255,255,0.18);
    color: white;
    padding: 10px 14px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
}

nav button:hover {
    background: white;
    color: #1b7a3a;
}

/* HERO */
.hero {
    min-height: 430px;
    padding: 55px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:
        linear-gradient(rgba(13,70,27,0.65), rgba(13,70,27,0.65)),
        url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80");
    background-size: cover;
    background-position: center;
    color: white;
}

.hero-text {
    max-width: 650px;
}

.hero h2 {
    font-size: 42px;
    margin-bottom: 15px;
}

.hero p {
    font-size: 20px;
    line-height: 1.7;
}

.hero-buttons {
    margin-top: 25px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.main-btn {
    padding: 14px 24px;
    border: none;
    border-radius: 30px;
    background: #ffca28;
    color: #263238;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
}

.voice-btn {
    padding: 14px 24px;
    border: 2px solid white;
    border-radius: 30px;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: 16px;
}

/* SECTION */
section {
    padding: 45px 6%;
}

.section-title {
    text-align: center;
    margin-bottom: 30px;
}

.section-title h2 {
    font-size: 30px;
    color: #176b31;
}

.section-title p {
    margin-top: 8px;
    color: #52705a;
}

/* CARDS */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.card {
    background: white;
    border-radius: 20px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 5px 18px rgba(0,0,0,0.08);
    transition: 0.3s;
    cursor: pointer;
    border: 2px solid transparent;
}

.card:hover {
    transform: translateY(-7px);
    border-color: #4caf50;
}

.card-icon {
    font-size: 65px;
    margin-bottom: 12px;
}

.card h3 {
    font-size: 21px;
    margin-bottom: 8px;
}

.card p {
    color: #607d65;
    line-height: 1.6;
}

.card button {
    margin-top: 15px;
    padding: 10px 18px;
    border: none;
    border-radius: 20px;
    background: #2e8b57;
    color: white;
    cursor: pointer;
}

/* WEATHER */
.weather-box {
    background: linear-gradient(135deg, #64b5f6, #1976d2);
    color: white;
    border-radius: 25px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.weather-main {
    display: flex;
    align-items: center;
    gap: 20px;
}

.weather-icon {
    font-size: 75px;
}

.temperature {
    font-size: 48px;
    font-weight: bold;
}

.weather-details {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.weather-detail {
    background: rgba(255,255,255,0.2);
    padding: 15px;
    border-radius: 15px;
    min-width: 120px;
    text-align: center;
}

/* CROP SELECTOR */
.crop-selector {
    background: white;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 5px 18px rgba(0,0,0,0.08);
    text-align: center;
}

select {
    padding: 13px 20px;
    border: 2px solid #4caf50;
    border-radius: 12px;
    font-size: 17px;
    margin: 10px;
    background: white;
}

.result {
    margin-top: 20px;
    padding: 20px;
    background: #eef8ed;
    border-radius: 15px;
    display: none;
    text-align: left;
    line-height: 1.7;
}

.result.show {
    display: block;
}

/* PRICE */
.price-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 18px rgba(0,0,0,0.08);
}

.price-table th,
.price-table td {
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;
}

.price-table th {
    background: #237a3b;
    color: white;
}

.price-up {
    color: green;
    font-weight: bold;
}

/* ALERT */
.alert-box {
    background: #fff3cd;
    border-left: 7px solid #ffb300;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 15px;
}

.alert-box strong {
    color: #9a6800;
}

/* SOIL */
.soil-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    align-items: center;
}

.soil-image {
    background:
        url("https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=80");
    background-size: cover;
    background-position: center;
    height: 300px;
    border-radius: 25px;
}

.soil-info {
    background: white;
    padding: 30px;
    border-radius: 25px;
    box-shadow: 0 5px 18px rgba(0,0,0,0.08);
}

.soil-meter {
    height: 22px;
    background: #ddd;
    border-radius: 20px;
    margin: 15px 0;
    overflow: hidden;
}

.soil-level {
    width: 72%;
    height: 100%;
    background: #4caf50;
    border-radius: 20px;
}

/* FOOTER */
footer {
    background: #123d20;
    color: white;
    text-align: center;
    padding: 30px;
}

footer p {
    margin: 7px;
}

/* MOBILE */
@media(max-width: 800px) {
    header {
        flex-direction: column;
        gap: 15px;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        text-align: center;
        padding: 50px 20px;
    }

    .hero h2 {
        font-size: 30px;
    }

    .hero p {
        font-size: 17px;
    }

    .hero-buttons {
        justify-content: center;
    }

    .soil-container {
        grid-template-columns: 1fr;
    }

    .weather-box {
        text-align: center;
        justify-content: center;
    }

    .weather-main {
        justify-content: center;
    }
async function askBackend(question) {
    try {
        const response = await fetch(
            "https://farmer-friendly-website.onrender.com/ask",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: question
                })
            }
        );

        const data = await response.json();
        return data.answer;

    } catch (error) {
        console.error("Backend error:", error);
        return "Server connection సమస్య వచ్చింది.";
    }
}
    .price-table {
        font-size: 13px;
    }
}
