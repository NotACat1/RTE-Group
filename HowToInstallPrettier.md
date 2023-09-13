## Установка:

В корень проекта кладем .prettierrc.json

В Visual Studio в разделе Extentions в поиске вбиваем Prettier.
Самый верхний в списке будет Prettier - Code Formatter.
Нажимаем Install

В настройках VSCode выбираем Settings 
Вбиваем @ext:esbenp.prettier-vscode

В поле Prettier: Config Path вносим путь до файла 
.prettierrc.json
(Путь берем путем нажатия на файл .prettierrc.json правой кнопкой мыши - Copy Path)

Установка завершена. 

## Использование: 

Для выбора доступных команд открываем меню нажатием клавиш:
Ctrl - Shift - P (Windows)
Command - Shift - P (MacOS)

В выпадающем списке находим Format Document, нажимаем Enter (в первый раз выбираем сам инструмент форматирования - Prettier).

Моментальное форматирование (без выпадающего меню):
Shift + Alt + F (Windows)
Shift - Option - F (MacOS)

## Чтобы форматировалось при сохранении:

Переходим в настройки VSCode
Вбиваем Formatter
В поле Editor: Default Formatter выбираем Prettier
В поле Editor: Format On Save ставим галку. 


