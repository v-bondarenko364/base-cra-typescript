import { useState, useEffect } from 'react';
import { I18nResolver } from 'i18n-ts';

import EnglishLocale from '@lang/en';
import RussianLocale from '@lang/ru';
import { LocaleModel } from '@lang/types';

const i18n = {
	en: EnglishLocale,
	ru: RussianLocale,
	default: RussianLocale,
};

export interface I18nModel {
	t: LocaleModel;
	setLang: (lang: string) => void;
}

const useI18n = (defaultLang: string): I18nModel => {
	const getLocalzation = (lang: string) => new I18nResolver(i18n, lang).translation;

	const [lang, setLang] = useState(defaultLang);
	const [t, setT] = useState(getLocalzation(defaultLang));

	useEffect(() => setT(getLocalzation(lang)), [lang]);

	return {
		t,
		setLang,
	};
};

export default useI18n;
