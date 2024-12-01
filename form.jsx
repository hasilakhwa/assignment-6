export default function Form() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      {/* Name Field */}
      <input
        type="text"
        name="name"
        placeholder="Aapka Naam"
        className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
      />

      {/* Email Field */}
      <input
        type="email"
        name="email"
        placeholder="Aapka Email"
        className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
      />

      {/* Message Field */}
      <textarea
        name="message"
        placeholder="Aapka Message"
        className="w-full p-2 border border-gray-300 rounded"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
