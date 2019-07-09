import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import packageJson from "../package.json";

const peerDependencies = Object.keys(packageJson.peerDependencies);
const globals = {
  react: "React",
  "react-dom": "ReactDOM"
};

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        globals: globals,
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: "es",
        globals: globals,
        sourcemap: true
      }
    ],
    external: peerDependencies,
    plugins: [
      nodeResolve(),
      commonjs({
        include: "node_modules/**"
      }),
      babel({
        exclude: "node_modules/**",
        presets: [
            ["@babel/preset-env", {
                "loose": true,
                "modules": false
            }], "@babel/preset-react"],
        /*plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread"
        ]*/
      })
    ]
  }
];
