module.exports = {
  apps: [
    {
      name: "IT_BLOG_NEXT",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
