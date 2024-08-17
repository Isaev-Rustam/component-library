// Интерфейс для цветов темы
export interface ThemeColors {
  'primary-color': string; // Основной акцентный цвет (например, для кнопок и важных элементов)
  'secondary-color': string; // Вторичный акцентный цвет (например, для менее важных элементов)
  'background-color': string; // Цвет фона для основной структуры страницы
  'surface-color': string; // Цвет фона для поверхностных элементов (например, карточек, модальных окон)
  'text-color': string; // Основной цвет текста для лучшей читаемости
  'secondary-text-color': string; // Вторичный цвет текста для менее важного контента
  'border-color': string; // Цвет границ для разделения различных элементов
  'hover-color': string; // Цвет фона при наведении курсора на элемент
  'active-color': string; // Цвет фона активных элементов (например, нажатых кнопок)
  'disabled-color': string; // Цвет для отключенных элементов (например, недоступных кнопок)
  'error-color': string; // Цвет для сообщений об ошибках (например, для форм)
  'success-color': string; // Цвет для успешных действий (например, подтверждение действия)
  'warning-color': string; // Цвет для предупреждений (например, для уведомлений о рисках)
}

// Радиус
export interface ThemeBorderRadius {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

// Ширина рамки
export interface ThemeBorderWidth {
  thin: string;
  medium: string;
  thick: string;
  extraThick: string;
}

// Интерфейс Theme определяет структуру темы, состоящую из объекта colors
export interface Theme {
  colors: ThemeColors;
  borderRadius: ThemeBorderRadius;
  borderWidth: ThemeBorderWidth;
}

// Тип ключей для рамок
export type BorderRadiusKeys = keyof ThemeBorderRadius;
export type BorderWidthKeys = keyof ThemeBorderWidth;
export type BorderColorKeys = keyof Theme['colors'];

// Тип значений для рамок
export type BorderRadiusValues = ThemeBorderRadius[BorderRadiusKeys];
export type BorderWidthValues = ThemeBorderWidth[BorderWidthKeys];
export type BorderColorsValues = Theme['colors'][keyof Theme['colors']];
