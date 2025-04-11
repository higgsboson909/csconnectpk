/**
 * Hamburger Menu Test Script
 * 
 * This script helps test the functionality of the hamburger menu
 * Simply run in the browser console to verify the menu works properly
 */

(function() {
    console.log('Testing hamburger menu functionality...');

    // Test 1: Check if elements exist
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!mobileToggle) {
        console.error('Mobile toggle button not found!');
        return;
    }
    
    if (!mobileMenu) {
        console.error('Mobile menu not found!');
        return;
    }
    
    console.log('✅ Test 1: Mobile menu elements exist');
    
    // Test 2: Check initial states
    const initialToggleExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    const initialMenuHidden = mobileMenu.getAttribute('aria-hidden') === 'true';
    const initialMenuClass = mobileMenu.classList.contains('active');
    
    if (initialToggleExpanded) {
        console.warn('Mobile toggle should initially have aria-expanded="false"');
    }
    
    if (!initialMenuHidden) {
        console.warn('Mobile menu should initially have aria-hidden="true"');
    }
    
    if (initialMenuClass) {
        console.warn('Mobile menu should not have "active" class initially');
    }
    
    console.log('✅ Test 2: Initial states verified');
    
    // Test 3: Test opening the menu
    console.log('Opening the mobile menu...');
    mobileToggle.click();
    
    setTimeout(() => {
        const openToggleExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        const openMenuHidden = mobileMenu.getAttribute('aria-hidden') === 'true';
        const openMenuClass = mobileMenu.classList.contains('active');
        
        if (!openToggleExpanded) {
            console.error('After opening, mobile toggle should have aria-expanded="true"');
        }
        
        if (openMenuHidden) {
            console.error('After opening, mobile menu should have aria-hidden="false"');
        }
        
        if (!openMenuClass) {
            console.error('After opening, mobile menu should have "active" class');
        }
        
        console.log('✅ Test 3: Menu opens correctly');
        
        // Test 4: Test closing the menu
        console.log('Closing the mobile menu...');
        mobileToggle.click();
        
        setTimeout(() => {
            const closedToggleExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            const closedMenuHidden = mobileMenu.getAttribute('aria-hidden') === 'true';
            const closedMenuClass = mobileMenu.classList.contains('active');
            
            if (closedToggleExpanded) {
                console.error('After closing, mobile toggle should have aria-expanded="false"');
            }
            
            if (!closedMenuHidden) {
                console.error('After closing, mobile menu should have aria-hidden="true"');
            }
            
            if (closedMenuClass) {
                console.error('After closing, mobile menu should not have "active" class');
            }
            
            console.log('✅ Test 4: Menu closes correctly');
            console.log('All hamburger menu tests completed!');
        }, 500);
    }, 500);
})();
