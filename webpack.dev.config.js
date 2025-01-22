import path from 'path';

// Эмуляция __dirname
const __dirname = new URL('.', import.meta.url).pathname;

export const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};
