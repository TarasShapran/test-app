export default function Genre({item}) {
    return (
        <option value={item.id}>
            {
                item.name
            }
        </option>
    );
}