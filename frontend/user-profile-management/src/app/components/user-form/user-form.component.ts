import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = {
    id: null,
    firstName: '',
    lastName: '',
    userTypeId: null
  };

  userTypes: any[] = [];

  constructor(
    private userService: UserService,
    private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUserTypes();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(+id).subscribe(data => {
        this.user = data;
      });
    }
  }

  loadUserTypes() {
    this.userTypeService.getUserTypes().subscribe(data => {
      this.userTypes = data;
    });
  }

  saveUser() {
    if (this.user.id) {
      // Update existing user
      this.userService.updateUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      // Create new user
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
}


