function tabSwitch(new_tab, new_content) {
    document.querySelectorAll('.tabs a').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

    document.getElementById(new_tab).classList.add('active');
    document.getElementById(new_content).classList.add('active');
}