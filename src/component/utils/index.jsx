export const filterData = (data, searchQuery) => {
    return data.filter((item) => {
        const { title, serviceType, category, location } = item;
        const searchText = searchQuery.toLowerCase();
        return (
            title && title.toLowerCase().includes(searchText) ||
            serviceType && serviceType.toLowerCase().includes(searchText) ||
            category && category.toLowerCase().includes(searchText) ||
            location && location.toLowerCase().includes(searchText)
        );
    });
};
