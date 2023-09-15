#!/bin/sh

echo "Загрузка node_modules..."
if ! npm i webpack --save-dev; then
  echo "Не удалось загрузить node_modules";
  exit 1;
fi

packages=("husky" "eslint" "stylelint" "prettier" "htmlhint" "@commitlint/{config-conventional,cli}" "lint-staged");

for package in "${packages[@]}"
do
  echo "Загрузка $package...";
  npm install "$package" --save-dev;
done

echo "Инициализация husky...";
npx husky install;

exit 0;
