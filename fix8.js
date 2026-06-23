const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// === 1. NEW STATE: checkbox next to question, date always visible ===
html = html.replace(
  `html = '<div class="panel-card"><h2>Advance to Outreach</h2><div class="form-grid"><div class="form-group"><label>Customer Outreach Initiated? <span class="required">*</span></label><div class="radio-group"><label><input type="checkbox" id="gateOutreach" onchange="onOutreachChange()"> Yes</label> <span id="outreachDateGroup" style="display:none;margin-left:12px;vertical-align:middle;"><input type="date" id="gateOutreachDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;" onchange="checkMoveButtonState()"></span></div></div><div class="form-group full-width"><label>Notes</label><textarea id="gateOutreachComment" placeholder="Optional notes..."></textarea></div></div></div>';`,
  `html = '<div class="panel-card"><h2>Advance to Outreach</h2><div class="form-grid"><div class="form-group"><label><input type="checkbox" id="gateOutreach" onchange="checkMoveButtonState()" style="margin-right:6px;"> Customer Outreach Initiated? <span class="required">*</span></label></div><div class="form-group"><label>Date <span class="required">*</span></label><input type="date" id="gateOutreachDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;width:100%;" onchange="checkMoveButtonState()"></div><div class="form-group full-width"><label>Notes</label><textarea id="gateOutreachComment" placeholder="Optional notes..."></textarea></div></div></div>';`
);

// === 2. OUTREACH STATE: checkbox next to question, date always visible ===
html = html.replace(
  `html = '<div class="panel-card"><h2>Customer Engagement</h2><div class="form-grid"><div class="form-group"><label>Engaged Customer? <span class="required">*</span></label><div class="radio-group"><label><input type="checkbox" id="gateEngaged" onchange="onEngagedChange()"> Yes</label> <span id="engageDateGroup" style="display:none;margin-left:12px;vertical-align:middle;"><input type="date" id="gateEngageDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;" onchange="checkMoveButtonState()"></span></div></div><div class="form-group full-width"><label>Engagement Outcome <span class="required">*</span></label><select id="gateEngagementOutcome" onchange="onOutcomeChange()"><option value="">Select an option</option><option value="agreed">Customer has agreed to work on campaign</option><option value="preference">Customer prefers to work with another partner &rarr; Blocked</option><option value="declined">Customer no longer requires assistance &rarr; Blocked</option><option value="external">Customer cannot engage at this time &rarr; Blocked</option></select></div><div class="form-group full-width" id="engageCommentGroup" style="display:none;"><label>Notes <span class="required">*</span></label><textarea id="gateEngageComment" placeholder="Required for non-success outcomes..."></textarea></div></div></div>';`,
  `html = '<div class="panel-card"><h2>Customer Engagement</h2><div class="form-grid"><div class="form-group"><label><input type="checkbox" id="gateEngaged" onchange="checkMoveButtonState()" style="margin-right:6px;"> Engaged Customer? <span class="required">*</span></label></div><div class="form-group"><label>Date <span class="required">*</span></label><input type="date" id="gateEngageDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;width:100%;" onchange="checkMoveButtonState()"></div><div class="form-group full-width"><label>Engagement Outcome <span class="required">*</span></label><select id="gateEngagementOutcome" onchange="onOutcomeChange()"><option value="">Select an option</option><option value="agreed">Customer has agreed to work on campaign</option><option value="preference">Customer prefers to work with another partner &rarr; Blocked</option><option value="declined">Customer no longer requires assistance &rarr; Blocked</option><option value="external">Customer cannot engage at this time &rarr; Blocked</option></select></div><div class="form-group full-width" id="engageCommentGroup" style="display:none;"><label>Notes <span class="required">*</span></label><textarea id="gateEngageComment" placeholder="Required for non-success outcomes..."></textarea></div></div></div>';`
);

// === 3. ENGAGED STATE: checkbox next to question, date always visible ===
html = html.replace(
  `html = '<div class="panel-card"><h2>Customer SOW</h2><p style="font-size:12px;color:#616161;margin-bottom:14px;">Customer is engaged. Confirm Statement of Work (SOW) status to proceed.</p><div class="form-grid"><div class="form-group"><label>Customer SOW prepared? <span class="required">*</span></label><div class="radio-group"><label><input type="checkbox" id="gateSowDrafted" onchange="onSowDraftedChange()"> Yes</label> <span id="sowDraftedDateGroup" style="display:none;margin-left:12px;vertical-align:middle;"><input type="date" id="gateSowDraftedDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;" onchange="checkMoveButtonState()"></span></div></div><div class="form-group full-width"><label>Comments</label><textarea id="gateSowComments" placeholder="Additional context..."></textarea></div></div></div>';`,
  `html = '<div class="panel-card"><h2>Customer SOW</h2><div class="form-grid"><div class="form-group"><label><input type="checkbox" id="gateSowDrafted" onchange="checkMoveButtonState()" style="margin-right:6px;"> Customer SOW prepared? <span class="required">*</span></label></div><div class="form-group"><label>Date <span class="required">*</span></label><input type="date" id="gateSowDraftedDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;width:100%;" onchange="checkMoveButtonState()"></div><div class="form-group full-width"><label>Comments</label><textarea id="gateSowComments" placeholder="Additional context..."></textarea></div></div></div>';`
);

// === 4. FUNDING INITIAL: checkboxes next to questions, dates always visible ===
html = html.replace(
  `html = '<div class="panel-card"><h2>Funding</h2><div class="form-grid"><div class="form-group full-width"><label>Is Microsoft funding needed? <span class="required">*</span></label><div class="radio-group"><label><input type="radio" name="fundingNeeded" id="gateFundingYes" value="yes" onchange="onFundingNeededChange()"> Yes</label><label style="margin-left:16px;"><input type="radio" name="fundingNeeded" id="gateFundingNo" value="no" onchange="onFundingNeededChange()"> No</label></div></div><div class="form-group" id="fundingRequestedGroup" style="opacity:0.4;"><label>Funding Requested? <span class="required">*</span></label><div class="radio-group"><label><input type="checkbox" id="gateFundingRequested" disabled onchange="onFundingRequestedChange()"> Yes</label> <span id="fundingRequestedDateGroup" style="display:none;margin-left:12px;vertical-align:middle;"><input type="date" id="gateFundingRequestedDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;" onchange="checkMoveButtonState()"></span></div></div><div class="form-group full-width" id="sowSignedNoFundingGroup" style="opacity:0.4;display:none;"><label>Customer SOW signed? <span class="required">*</span></label><div class="radio-group"><label><input type="checkbox" id="gateSowNoFunding" disabled onchange="onSowSignedNoFundingChange()"> Yes</label> <span id="sowSignedNoFundingDateGroup" style="display:none;margin-left:12px;vertical-align:middle;"><input type="date" id="gateSowNoFundingDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;" onchange="checkMoveButtonState()"></span></div></div><div class="form-group full-width"><label>Comments</label><textarea id="gateFundingComment" placeholder="Notes on funding..."></textarea></div></div></div>';`,
  `html = '<div class="panel-card"><h2>Funding</h2><div class="form-grid"><div class="form-group full-width"><label>Is Microsoft funding needed? <span class="required">*</span></label><div class="radio-group"><label><input type="radio" name="fundingNeeded" id="gateFundingYes" value="yes" onchange="onFundingNeededChange()"> Yes</label><label style="margin-left:16px;"><input type="radio" name="fundingNeeded" id="gateFundingNo" value="no" onchange="onFundingNeededChange()"> No</label></div></div><div class="form-group" id="fundingRequestedGroup" style="opacity:0.4;"><label><input type="checkbox" id="gateFundingRequested" disabled onchange="onFundingRequestedChange()" style="margin-right:6px;"> Funding Requested? <span class="required">*</span></label></div><div class="form-group" id="fundingRequestedDateGroup" style="opacity:0.4;"><label>Date <span class="required">*</span></label><input type="date" id="gateFundingRequestedDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;width:100%;" disabled onchange="checkMoveButtonState()"></div><div class="form-group full-width" id="sowSignedNoFundingGroup" style="opacity:0.4;display:none;"><label><input type="checkbox" id="gateSowNoFunding" disabled onchange="onSowSignedNoFundingChange()" style="margin-right:6px;"> Customer SOW signed? <span class="required">*</span></label></div><div class="form-group" id="sowSignedNoFundingDateGroup" style="opacity:0.4;display:none;"><label>Date <span class="required">*</span></label><input type="date" id="gateSowNoFundingDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;width:100%;" disabled onchange="checkMoveButtonState()"></div><div class="form-group full-width"><label>Comments</label><textarea id="gateFundingComment" placeholder="Notes on funding..."></textarea></div></div></div>';`
);

// === 5. FUNDING PENDING: checkbox next to question, date always visible ===
html = html.replace(
  `html = '<div class="panel-card"><h2>Funding Pending</h2><p style="font-size:12px;color:#616161;margin-bottom:14px;">Microsoft funding has been requested. Confirm when funding is secured.</p><div class="form-grid"><div class="form-group"><label>Is Microsoft funding secured? <span class="required">*</span></label><div class="radio-group"><label><input type="checkbox" id="gateFundingSecured" onchange="onFundingSecuredSubChange()"> Yes</label> <span id="fundingSecuredDateGroup" style="display:none;margin-left:12px;vertical-align:middle;"><input type="date" id="gateFundingSecuredDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;" onchange="checkMoveButtonState()"></span></div></div><div class="form-group full-width"><label>Comments</label><textarea id="gateFundingComment" placeholder="Notes on funding..."></textarea></div></div></div>';`,
  `html = '<div class="panel-card"><h2>Funding Pending</h2><div class="form-grid"><div class="form-group"><label><input type="checkbox" id="gateFundingSecured" onchange="onFundingSecuredSubChange()" style="margin-right:6px;"> Is Microsoft funding secured? <span class="required">*</span></label></div><div class="form-group"><label>Date <span class="required">*</span></label><input type="date" id="gateFundingSecuredDate" style="padding:4px 8px;border:1px solid #d2d0ce;border-radius:4px;width:100%;" onchange="checkMoveButtonState()"></div><div class="form-group full-width"><label>Comments</label><textarea id="gateFundingComment" placeholder="Notes on funding..."></textarea></div></div></div>';`
);

// === 6. Update onFundingNeededChange to enable/disable date fields ===
// The fundingRequestedDateGroup is now a separate div, needs enable/disable logic
html = html.replace(
  /function onFundingNeededChange\(\) \{[\s\S]*?checkMoveButtonState\(\);\s*\}/,
  `function onFundingNeededChange() {
      var yesRadio = document.getElementById('gateFundingYes');
      var noRadio = document.getElementById('gateFundingNo');
      var reqGroup = document.getElementById('fundingRequestedGroup');
      var reqCb = document.getElementById('gateFundingRequested');
      var reqDateGroup = document.getElementById('fundingRequestedDateGroup');
      var reqDate = document.getElementById('gateFundingRequestedDate');
      var sowNoFundingGroup = document.getElementById('sowSignedNoFundingGroup');
      var sowNoFundingCb = document.getElementById('gateSowNoFunding');
      var sowNoFundingDateGroup = document.getElementById('sowSignedNoFundingDateGroup');
      var sowNoFundingDate = document.getElementById('gateSowNoFundingDate');
      if (yesRadio && yesRadio.checked) {
        if (reqGroup) reqGroup.style.opacity = '1';
        if (reqCb) reqCb.disabled = false;
        if (reqDateGroup) { reqDateGroup.style.opacity = '1'; reqDateGroup.style.display = ''; }
        if (reqDate) reqDate.disabled = false;
        if (sowNoFundingGroup) { sowNoFundingGroup.style.display = 'none'; }
        if (sowNoFundingDateGroup) { sowNoFundingDateGroup.style.display = 'none'; }
        if (sowNoFundingCb) { sowNoFundingCb.disabled = true; sowNoFundingCb.checked = false; }
        if (sowNoFundingDate) { sowNoFundingDate.disabled = true; sowNoFundingDate.value = ''; }
      } else if (noRadio && noRadio.checked) {
        if (reqGroup) reqGroup.style.opacity = '0.4';
        if (reqCb) { reqCb.disabled = true; reqCb.checked = false; }
        if (reqDateGroup) { reqDateGroup.style.opacity = '0.4'; }
        if (reqDate) { reqDate.disabled = true; reqDate.value = ''; }
        if (sowNoFundingGroup) { sowNoFundingGroup.style.display = ''; sowNoFundingGroup.style.opacity = '1'; }
        if (sowNoFundingDateGroup) { sowNoFundingDateGroup.style.display = ''; sowNoFundingDateGroup.style.opacity = '1'; }
        if (sowNoFundingCb) sowNoFundingCb.disabled = false;
        if (sowNoFundingDate) sowNoFundingDate.disabled = false;
      }
      var moveBtn = document.getElementById("moveBtnNext");
      if (moveBtn) {
        if (yesRadio && yesRadio.checked) {
          moveBtn.textContent = "Move to Funding Pending";
        } else {
          moveBtn.textContent = "Move to Committed";
        }
      }
      checkMoveButtonState();
    }`
);

// === 7. Update onFundingRequestedChange - date is always visible, just enable/disable ===
html = html.replace(
  /function onFundingRequestedChange\(\) \{[\s\S]*?checkMoveButtonState\(\);\s*\}/,
  `function onFundingRequestedChange() {
      var reqCb = document.getElementById('gateFundingRequested');
      var reqDate = document.getElementById('gateFundingRequestedDate');
      if (reqCb && reqCb.checked) {
        if (reqDate) reqDate.disabled = false;
      } else {
        if (reqDate) { reqDate.disabled = true; reqDate.value = ''; }
      }
      checkMoveButtonState();
    }`
);

// === 8. Update onFundingSecuredSubChange - date always visible ===
html = html.replace(
  /function onFundingSecuredSubChange\(\) \{[\s\S]*?checkMoveButtonState\(\);\s*\}/,
  `function onFundingSecuredSubChange() {
      var secCb = document.getElementById('gateFundingSecured');
      var dateInput = document.getElementById('gateFundingSecuredDate');
      if (secCb && secCb.checked) {
        if (dateInput) dateInput.disabled = false;
      } else {
        if (dateInput) { dateInput.disabled = true; dateInput.value = ''; }
      }
      checkMoveButtonState();
    }`
);

// === 9. Update onSowSignedNoFundingChange - date always visible ===
html = html.replace(
  /function onSowSignedNoFundingChange\(\) \{[\s\S]*?checkMoveButtonState\(\);\s*\}/,
  `function onSowSignedNoFundingChange() {
      var cb = document.getElementById('gateSowNoFunding');
      var dateInput = document.getElementById('gateSowNoFundingDate');
      if (cb && cb.checked) {
        if (dateInput) dateInput.disabled = false;
      } else {
        if (dateInput) { dateInput.disabled = true; dateInput.value = ''; }
      }
      checkMoveButtonState();
    }`
);

// === 10. Update onOutcomeChange to change button text to "Move to Blocked" ===
html = html.replace(
  /function onOutcomeChange\(\) \{[\s\S]*?checkMoveButtonState\(\);\s*\}/,
  `function onOutcomeChange() {
      var sel = document.getElementById('gateEngagementOutcome');
      selectedOutcome = sel ? sel.value : '';
      var commentGroup = document.getElementById('engageCommentGroup');
      if (selectedOutcome && selectedOutcome !== 'agreed') {
        if (commentGroup) commentGroup.style.display = '';
      } else {
        if (commentGroup) commentGroup.style.display = 'none';
      }
      var moveBtn = document.getElementById('moveBtnNext');
      if (moveBtn) {
        if (selectedOutcome && selectedOutcome !== 'agreed') {
          moveBtn.textContent = 'Move to Blocked';
        } else {
          moveBtn.textContent = 'Move to Engaged';
        }
      }
      checkMoveButtonState();
    }`
);

// === 11. Update checkMoveButtonState for Outreach - allow blocked outcomes too ===
html = html.replace(
  /\} else if \(c\.status === 'Outreach'\) \{\s*var engChecked[^}]*valid = engChecked && engDate && selectedOutcome === 'agreed';/,
  `} else if (c.status === 'Outreach') {
        var engChecked = document.getElementById('gateEngaged') && document.getElementById('gateEngaged').checked;
        var engDate = document.getElementById('gateEngageDate') && document.getElementById('gateEngageDate').value;
        if (selectedOutcome === 'agreed') {
          valid = engChecked && engDate;
        } else if (selectedOutcome) {
          var comment = document.getElementById('gateEngageComment') && document.getElementById('gateEngageComment').value;
          valid = !!comment;
        }`
);

// === 12. Update moveToNextState for Outreach to handle blocked outcomes ===
// Need to find where Outreach validation is in moveToNextState and update it
// Also need to update the nextState determination for blocked

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done');
