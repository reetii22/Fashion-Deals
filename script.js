function toggleBox(selectedOption) {
    // Hide all expandable boxes
    document.querySelectorAll('.expandable-box').forEach(box => box.style.display = 'none');

    // Show the expandable box for the selected option
    const expandableBox = document.getElementById(`expandable-box-${selectedOption}`);
    if (expandableBox) {
        expandableBox.style.display = 'block';
    }
}
