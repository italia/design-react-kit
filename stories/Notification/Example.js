import React from 'react'
import NotificationWithIcon from '../../src/components/Notification/NotificationWithIcon'
import StandardNotification from '../../src/components/Notification/StandardNotification'


const Examples = () => (
  <div class="container test-docs">
	<div class="row">
		<div class="col-12 col-md-6 mb-4 mb-md-0">
			<p class="mb-4"><strong>Notification standard</strong></p>
            <StandardNotification/>
		</div>
		<div class="col-12 col-md-6">
			<p class="mb-4"><strong>Notification with icon</strong></p>
			<NotificationWithIcon/>
		</div>
	</div>
</div>
)
export default Examples
