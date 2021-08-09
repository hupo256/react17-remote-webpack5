react17 + webpack5 打造的微前端 base 层

1. git clone ...

2. cd ...

3. 安装依赖 yarn

4. 启动 yarn start  
   访问入口 http://ip:3004/mtk/

5. 打包  
   开发 yarn dev  
   测试 yarn test  
   生产 yarn build

6. node 版本 v10.0 以上

7. 相关文档  
   ajax 库 axios https://www.kancloud.cn/yunye/axios/234845

注意:开发时 npm start 启动默认为 dev 环境，需要请求 test、pro 接口请手动个性 utils/config  
文件中的 env 参数，打包为自动更改 api host 无修手动修改
