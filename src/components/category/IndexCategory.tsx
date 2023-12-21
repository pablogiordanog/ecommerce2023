import { useEffect, useReducer } from "react";
import { URL_ALL_CATEGORY } from "../../constants/Contants";

const INIT_STATE = { data: [], isLoading: false, error: "", isSuccess: false };

const loadStatus = (state: any, action: any) => {
  switch (action.type) {
    case "isSuccess":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: "",
        isSuccess: true,
      };
    case "error":
      return {
        ...state,
        data: [],
        isLoading:true,
        error: action.payload.error,
        isSuccess: false,
      };
    default:
      return state;
  }
};

const loadCategoty = (url: string) => {
  const [state, dispatch] = useReducer(loadStatus, INIT_STATE);
  const { data, isLoading, error, isSuccess } = state;
  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.error) {
          throw new Error("Error cargando datos");
        }
        console.log(data);
        dispatch({ type: "isSuccess", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: "Error" });
      }
    };
    load();
  }, [url]);
  return { data, isLoading, error, isSuccess };
};

const IndexCategory = () => {
  const { data, isLoading, error, isSuccess } = loadCategoty(URL_ALL_CATEGORY);

  console.log(isLoading);

  if (isLoading) {
    return <h1>Cargando Categorias...</h1>;
  }

  if (!isSuccess) {
    return <h1>Cargando Categorias...</h1>;
  }

  if (error) {
    return <h1>Error {error}</h1>;
  }

  return (
    <>
      <div>
        {data.map((category: any) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndexCategory;
