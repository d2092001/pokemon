module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/pokemon/" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
