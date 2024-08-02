import { NgModule } from "@angular/core";

import { UserformComponent } from "./user-form.component";
import { FormsModule } from "@angular/forms";
import { FeatherModule } from "angular-feather";

/* App Root */
import{UserformRoutingModule} from './user-form-routing.module'
import { NavbarComponent } from "./navbar/navbar.component";

/* Feature Components */
import { PersonalComponent } from "./personal/personal.component";
import { WorkComponent } from "./work/work.component";
import { AddressComponent } from "./address/address.component";
import { ResultComponent } from "./result/result.component";

/* Shared Service */
import { FormDataService } from "./data/formData.service";
import { WorkflowService } from "./workflow/workflow.service";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, FormsModule, UserformRoutingModule, FeatherModule],
  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService },
  ],
  declarations: [
    UserformComponent,
    NavbarComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent,
  ],
  bootstrap: [UserformComponent],
})
export class UserformModule {}
