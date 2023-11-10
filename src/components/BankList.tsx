import useUsers from "../hooks/useUsers";

const BankList = () => {
    const { data } = useUsers();
    const banks = [...new Set(data.map((user) => user.bank))];
    const banksArray = [];

    for (const item of banks) {
        const duplicate = banksArray.find(
            (obj) => obj.cardType === item.cardType,
        );

        if (!duplicate) {
            banksArray.push(item);
        }
    }

    return (
        <>
            <ul>
                {banksArray.map((bank) => (
                    <li key={bank.iban}>{bank.cardType.replace("-", "")}</li>
                ))}
            </ul>
        </>
    );
};

export default BankList;
