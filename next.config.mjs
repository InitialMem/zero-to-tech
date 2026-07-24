/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",       // ← 就加这一行，build 完别留给那台常驻服务了，直接把每一页预渲染成静态 HTML、连同资源一起塞进一个干净的 out/ 里。
};

export default nextConfig;
