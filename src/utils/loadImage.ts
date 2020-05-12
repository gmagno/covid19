function importAll(r: any) {
  return r.keys().map(r);
}

declare var require: any;

export const splashImages = importAll(
  require.context('../images/', false, /\.(png|jpe?g|svg)$/)
);

export const flagsImages = () => {
  const r = require.context('../images/flags/', false, /\.(png|jpe?g|svg)$/);
  const keys = r.keys().map((v: string) => v.split('/')[1].split('.')[0]);
  const values = r.keys().map(r);
  const kv: { [key: string]: string } = {};
  keys.forEach(function (k: string, i: number) {
    kv[k] = values[i];
  });
  return kv;
};

export const flags = flagsImages();
