#!/bin/sh

echo "Загрузка node_modules...";
if ! npm i webpack --save-dev; then
  echo "Не удалось загрузить node_modules";
  exit 1;
fi

packages=("husky" "eslint" "stylelint" "prettier" "htmlhint" "lint-staged" "normalize.css");

for package in "${packages[@]}"
do
  echo "Загрузка $package...";
  npm install "$package" --save-dev;
done

echo "Загрузка commitlint...";
npm install @commitlint/{config-conventional,cli} --save-dev;

echo "Инициализация husky...";
npx husky install;

exit 0;
