import ComponentB from "./ComponentB";

const ComponentA = () => {
    return (
        <>
            <h4>Hello I am component A</h4>
            <ComponentB color="red" />
        </>
    );
};
export default ComponentA;