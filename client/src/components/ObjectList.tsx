import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ObjectForm from "./ObjectForm";

interface ObjectData {
  id?: number;
  name: string;
  type: string;
  size?: number;
  created_at?: string;
  updated_at?: string;
}

const ObjectList: React.FC = () => {
  const [objects, setObjects] = useState<ObjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchObjects();
  }, []);

  const fetchObjects = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/objects");
      if (!response.ok) {
        throw new Error("Failed to fetch objects");
      }
      const data = await response.json();
      setObjects(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleObjectCreated = () => {
    setShowForm(false);
    fetchObjects();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Objects</h2>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Add New Object"}
      </button>

      {showForm && <ObjectForm onObjectCreated={handleObjectCreated} />}

      {objects.length === 0 ? (
        <p>No objects found</p>
      ) : (
        <ul>
          {objects.map((obj) => (
            <li key={obj.id}>
              <Link to={`/objects/${obj.id}`}>
                <strong>{obj.name}</strong>
              </Link>{" "}
              ({obj.type}){obj.size && <span> - Size: {obj.size} bytes</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ObjectList;
