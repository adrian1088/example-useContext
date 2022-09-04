import useAuth from "../contexts/useAuth";

const Component3 = () => {
    const { person, data, clickFunction } = useAuth();
    return (
        <>
            <h4>Heey!! I am component 3 with name {person} and other data like </h4>
            <button onClick={clickFunction}>Click Me</button>
            {data.map((item) => {
                const { id, name, age } = item;
                return (
                    <ul key={id}>
                        <li>ID: {id}</li>
                        <li>Name: {name}</li>
                        <li>Age: {age}</li>
                    </ul>
                );
            })}
        </>
    );
};
export default Component3;