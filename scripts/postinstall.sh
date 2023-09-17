#!/bin/sh

if [ ! -d ".husky" ]; then
  echo "Инициализация husky...";
  npx husky install;
fi

echo "Инициализация husky...";
npx husky install;

chmod +x .husky/commit-msg;
chmod +x .husky/pre-commit;

echo "Husky инициализирован и права установлены.";
exit 0;
