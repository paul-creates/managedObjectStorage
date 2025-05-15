import React, { useState } from "react";

interface ObjectFormProps {
  onObjectCreated: () => void;
}

interface FormData {
  name: string;
  type: string;
  size: string;
}

const ObjectForm: React.FC<ObjectFormProps> = ({ onObjectCreated }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    type: "",
    size: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/api/objects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          size: formData.size ? parseInt(formData.size) : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create object");
      }

      setFormData({ name: "", type: "", size: "" });
      onObjectCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>Add New Object</h3>
      {error && <div className="error">Error: {error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="size">Size (bytes):</label>
          <input
            type="number"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Object"}
        </button>
      </form>
    </div>
  );
};

export default ObjectForm;
