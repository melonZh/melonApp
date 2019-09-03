const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
  // 用于按需加载antd的组件（具体配置方式请参照官网https://ant.design/docs/react/use-with-create-react-app-cn，这里只对config-overrides.js文件说明）
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 设置绝对路径：addWebpackAlias
  addWebpackAlias({
    "Mock": path.resolve(__dirname, "src/Mock"),
    "Pages": path.resolve(__dirname, "src/Pages"),
    "Contants": path.resolve(__dirname, "src/Contants"),
    "Utils": path.resolve(__dirname, "src/Utils"),
    "Redux": path.resolve(__dirname, "src/Redux"),
    "Redux-Modules":  path.resolve(__dirname, "src/Redux/Modules"),
    "Styles": path.resolve(__dirname, "src/Styles"),
    "Assets": path.resolve(__dirname, "src/Assets"),
    "Apis": path.resolve(__dirname, "src/Apis"),
    "Servers": path.resolve(__dirname, "src/Servers"),
    "Helpers": path.resolve(__dirname, "src/Helpers"),
  }),
  // 配置less：addLessLoader (loaderOptions)
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#1DA57A' }
  })
);