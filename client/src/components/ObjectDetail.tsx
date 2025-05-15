import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface ObjectData {
  id?: number;
  name: string;
  type: string;
  size?: number;
  created_at?: string;
  updated_at?: string;
}

interface Metadata {
  id?: number;
  object_id: number;
  key: string;
  value: string;
}

const ObjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [object, setObject] = useState<ObjectData | null>(null);
  const [metadata, setMetadata] = useState<Metadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchObjectDetails();
    }
  }, [id]);

  const fetchObjectDetails = async () => {
    try {
      // Fetch object details
      const objectResponse = await fetch(
        `http://localhost:3001/api/objects/${id}`
      );
      if (!objectResponse.ok) {
        throw new Error("Failed to fetch object details");
      }
      const objectData = await objectResponse.json();
      setObject(objectData);

      // Fetch metadata
      const metadataResponse = await fetch(
        `http://localhost:3001/api/objects/${id}/metadata`
      );
      if (!metadataResponse.ok) {
        throw new Error("Failed to fetch metadata");
      }
      const metadataData = await metadataResponse.json();
      setMetadata(metadataData);

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!object) return <div>Object not found</div>;

  return (
    <div>
      <h2>Object Details</h2>
      <div>
        <h3>{object.name}</h3>
        <p>Type: {object.type}</p>
        {object.size && <p>Size: {object.size} bytes</p>}
        <p>Created: {new Date(object.created_at!).toLocaleString()}</p>
        <p>Last Updated: {new Date(object.updated_at!).toLocaleString()}</p>
      </div>

      <div>
        <h3>Metadata</h3>
        {metadata.length === 0 ? (
          <p>No metadata available</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {metadata.map((item) => (
                <tr key={item.id}>
                  <td>{item.key}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ObjectDetail;
