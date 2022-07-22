<p align="center">
  <img width="300px" alt="" src="./docs/src/readme.png">
</p>

<h1 align="center">Primer CSS</h1>

<p align="center">Implementação CSS do Primer Design System do GitHub</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/@primer/css">
    <img alt="" src="https://img.shields.io/npm/v/@primer/css.svg">
  </a>
  <a aria-label="build status" href="https://github.com/primer/css/actions/workflows/ci.yml">
    <img alt="" src="https://github.com/primer/css/actions/workflows/ci.yml/badge.svg">
  </a>
  <a aria-label="contributors graph" href="https://github.com/primer/css/graphs/contributors">
    <img alt="" src="https://img.shields.io/github/contributors/primer/css.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/primer/css/commits/main">
    <img alt="" src="https://img.shields.io/github/last-commit/primer/css.svg">
  </a>
  <a aria-label="license" href="https://github.com/primer/css/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/primer/css.svg" alt="">
  </a>
</p>

## Documentação

A nossa documentação fica no site  [primer.style/css](https://primer.style/css). Você poderá encontrar a documentação detalhada sobre como começar, todos os componentes, nosso tema, nossos princípios e muito mais.
## Instalação
Esse reporitório é distribuído com [npm]. Depois [installing npm][install-npm], você pode instalar `@primer/css` com esse comando:

```sh
npm install --save @primer/css
```

## Uso
Os arquivos incluídos são escritos em [Sass] usando a sintaxe SCSS. Após [instalar](#install) com npm, você pode adicionar o diretório `node_modules` do seu projeto ao seu Sass [include paths](https://github.com/sass/node-sass#includepaths) (AKA [load paths] (http://technology.customink.com/blog/2014/10/09/understanding-and-using-sass-load-paths/) em Ruby), e então importá-lo assim

```scss
@import "@primer/css/index.scss";
```

Você pode importar módulos individuais do Primer diretamente do pacote `@primer/css`:

```scss
@import "@primer/css/core/index.scss";
@import "@primer/css/product/index.scss";
@import "@primer/css/marketing/index.scss";
```

## Desenvolvimento
Acesse [DEVELOP.md](DEVELOP.md) para ver documentos sobre o desenvolvimento.

## Publicação (for GitHub staff)
Você pode encontrar documentos sobre nosso processo de publicação em [RELEASING.md](RELEASING.md).

## Licença

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)


[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com/
[primer]: https://primer.style/
[sass]: http://sass-lang.com/
