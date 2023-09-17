#!/bin/sh

if [ ! -d "./.husky/_" ]; then
  echo "Инициализация husky...";
  npx husky install;
fi

chmod +x .husky/commit-msg;
chmod +x .husky/pre-commit;

echo "Husky инициализирован и права установлены.";
exit 0;
