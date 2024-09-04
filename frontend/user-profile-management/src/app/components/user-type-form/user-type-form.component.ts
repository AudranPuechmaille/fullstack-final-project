import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-user-type-form',
  templateUrl: './user-type-form.component.html',
  styleUrls: ['./user-type-form.component.css']
})
export class UserTypeFormComponent implements OnInit {

  userType = {
    id: null,
    type: ''
  };

  constructor(
    private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userTypeService.getUserTypeById(+id).subscribe(data => {
        this.userType = data;
      });
    }
  }

  saveUserType() {
    if (this.userType.id) {
      // Update existing user type
      this.userTypeService.updateUserType(this.userType).subscribe(() => {
        this.router.navigate(['/user-types']);
      });
    } else {
      // Create new user type
      this.userTypeService.createUserType(this.userType).subscribe(() => {
        this.router.navigate(['/user-types']);
      });
    }
  }
}

