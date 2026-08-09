/* Home Ecosystem JS customization for HomeBox (SPA / Safari compatible) */

// Utility function to observe changes in the DOM
const observe = (observer) => observer.observe(document.getElementById('__nuxt'), {childList: true, subtree: true});

// Home page > Quick Statistics
observe(new MutationObserver(() => {
    if (window.location.pathname === '/home') {
        const quickStatistics = document.querySelector('main section:first-of-type > div.grid');
        if (quickStatistics) {
            // If it has 4 children, it means the default rendering is done
            if (quickStatistics.children.length === 4) {
                // Remove the Total Value statistics box
                const totalValueBox = quickStatistics.querySelector('div:first-of-type');
                totalValueBox.remove();
            }

        }
    }
}));

// Home page > Recently Added
observe(new MutationObserver(() => {
    if (window.location.pathname === '/home') {
        const recentlyAddedTable = document.querySelector('main section:nth-of-type(2) table');
        if (recentlyAddedTable) {
            // If the header has 4 columns, it means the default rendering is done
            const headerColumns = recentlyAddedTable.querySelectorAll('thead th');
            if (headerColumns.length !== 4) return;

            // Iterate through table rows and remove the unwanted columns
            recentlyAddedTable.querySelectorAll('tr').forEach(row => {
                // Quantity column (2nd column)
                const quantityCell = row.querySelector('th:nth-of-type(2), td:nth-of-type(2)');

                // Insurance column (3rd column)
                const insuranceCell = row.querySelector('th:nth-of-type(3), td:nth-of-type(3)');

                // Purchase Price column (4th column)
                const purchasePriceCell = row.querySelector('th:nth-of-type(4), td:nth-of-type(4)');

                // Remove the cells if they exist
                if (quantityCell) quantityCell.remove();
                if (insuranceCell) insuranceCell.remove();
                if (purchasePriceCell) purchasePriceCell.remove();
            });
        }
    }
}));