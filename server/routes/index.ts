export default eventHandler((event) => {
  const storage = useStorage("assets:server")
  return storage.getItem("test")
});
