// ===============================
// FARMER FRIENDLY WEBSITE - JS
// ===============================

// BACKEND CONNECTION
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

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        return data.answer || "సమాధానం అందుబాటులో లేదు.";

    } catch (error) {
        console.error("Backend error:", error);

        return "Server connection సమస్య వచ్చింది. కొద్దిసేపటి తర్వాత ప్రయత్నించండి.";
    }
}


// ===============================
// FARMER ASSISTANT
// ===============================

async function askFarmerAssistant() {

    const questionInput =
        document.getElementById("farmerQuestion");

    if (!questionInput) {
        alert("Question input కనిపించలేదు.");
        return;
    }

    const question =
        questionInput.value.trim();

    if (question === "") {
        alert("దయచేసి మీ ప్రశ్నను టైప్ చేయండి.");
        return;
    }

    const answerBox =
        document.getElementById("farmerAnswer");

    if (answerBox) {

        answerBox.style.display = "block";

        answerBox.innerHTML =
            "🌱 సమాధానం కోసం చూస్తున్నాను...";
    }

    const answer =
        await askBackend(question);

    if (answerBox) {

        answerBox.innerHTML = `
            <strong>🌾 Farmer Mitrudu:</strong>
            <p>${answer}</p>
        `;
    }
}


// ===============================
// CROP INFORMATION
// ===============================

function showCropInfo() {

    const cropSelect =
        document.getElementById("cropSelect");

    const result =
        document.getElementById("cropResult");

    if (!cropSelect || !result) {
        return;
    }

    const crop =
        cropSelect.value;

    if (crop === "") {

        result.classList.remove("show");

        return;
    }

    const cropData = {

        rice: {
            name: "🌾 వరి",
            water: "వారానికి 2–3 సార్లు నీటి అవసరం ఉంటుంది.",
            fertilizer: "నత్రజని, భాస్వరం మరియు పొటాష్ సమతుల్యంగా ఉపయోగించాలి.",
            pest: "ఆకు ముడత మరియు కాండం తొలుచు పురుగులను గమనించండి."
        },

        cotton: {
            name: "🌿 పత్తి",
            water: "నేల తేమను బట్టి నీరు ఇవ్వాలి.",
            fertilizer: "పంట దశకు అనుగుణంగా ఎరువులు ఉపయోగించాలి.",
            pest: "పింక్ బోల్‌వార్మ్ మరియు తెల్లదోమలను గమనించండి."
        },

        chilli: {
            name: "🌶️ మిరప",
            water: "అతి నీరు ఇవ్వకుండా నేల తేమను పరిశీలించండి.",
            fertilizer: "సమతుల్య ఎరువులు ఉపయోగించండి.",
            pest: "త్రిప్స్ మరియు మైట్స్ వంటి పురుగులను గమనించండి."
        },

        maize: {
            name: "🌽 మొక్కజొన్న",
            water: "మొక్క పెరుగుదల దశలో తగినంత నీరు అవసరం.",
            fertilizer: "నత్రజని ఆధారిత ఎరువులు అవసరాన్ని బట్టి ఉపయోగించండి.",
            pest: "ఫాల్ ఆర్మీవార్మ్ వంటి పురుగులను గమనించండి."
        }

    };

    const data =
        cropData[crop];

    if (!data) {

        result.innerHTML =
            "పంట వివరాలు అందుబాటులో లేవు.";

    } else {

        result.innerHTML = `
            <h3>${data.name}</h3>

            <p>
                <strong>💧 నీరు:</strong>
                ${data.water}
            </p>

            <p>
                <strong>🌱 ఎరువులు:</strong>
                ${data.fertilizer}
            </p>

            <p>
                <strong>🐛 పురుగులు:</strong>
                ${data.pest}
            </p>
        `;
    }

    result.classList.add("show");
}


// ===============================
// VOICE FEATURE
// ===============================

function speakText(text) {

    if ("speechSynthesis" in window) {

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.lang = "te-IN";

        speech.rate = 0.9;

        window.speechSynthesis.cancel();

        window.speechSynthesis.speak(speech);

    } else {

        alert(
            "మీ browser voice feature ను support చేయడం లేదు."
        );
    }
}


// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🌾 Farmer Mitrudu website loaded."
        );

        const cropSelect =
            document.getElementById("cropSelect");

        if (cropSelect) {

            cropSelect.addEventListener(
                "change",
                showCropInfo
            );
        }
    }
);
