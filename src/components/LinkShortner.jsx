function LinkShortner({ id, children, ariaLabel }) {
  return (
    <section id={id} className="relative bg-gray-100" aria-label={ariaLabel}>
      <div className="max-w-4xl mx-auto p-6 space-y-6">{children}</div>
    </section>
  );
}
export default LinkShortner;
