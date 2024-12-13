let translations = {};

// Load translations
async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
            throw new Error('Failed to load translations');
        }
        translations = await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

loadTranslations();

export function getTranslation(lang, key) {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    return `Translation not found for ${key} in ${lang}`;
}