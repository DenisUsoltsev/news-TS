import path from 'path';

// Коментарий для отключения правила: не использовать require(). Только для одной строки! Локальное использование! (Для примера)
// eslint-disable-next-line @typescript-eslint/no-require-imports
// const { merge } = require('webpack-merge');
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

// Эмуляция __dirname
const __dirname = new URL('.', import.meta.url).pathname;
// Убираем лишнее... т.к. происходит дублирование диска (C:\\C:\\). Слеш перед C:\ осталяем, т.к. путь абсолютный!
let dirPath = __dirname.replace('C:/', '').replace(/^\/([A-Za-z]:)/, '$1');

// Проверка
// console.log(dirPath);

const baseConfig = {
    entry: path.resolve(dirPath, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/,                   // Добавляем обработку файлов .ts
                use: 'ts-loader',                // Используем ts-loader для TypeScript
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],              // Добавляем .ts для импорта
    },
    output: {
        filename: 'index.js',
        path: path.resolve(dirPath, './dist'),
    },
    plugins: [
        new DotenvWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(dirPath, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

// Проверка
// console.log(baseConfig);

async function getWebpackConfig({ mode }) {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? await import('./webpack.prod.config.js') : await import('./webpack.dev.config.js');
    // Извлекаем необходимые конфигурации
    const { devConfig } = envConfig;  // Если dev режим
    const { prodConfig } = envConfig;  // Если prod режим
    return merge(baseConfig, isProductionMode ? prodConfig : devConfig);
};

// Экспортируем функцию по умолчанию
export default getWebpackConfig;
