using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MattDavinoProject.Data;
using MattDavinoProject.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MattDavinoProject.Controllers
{
    [Produces("application/json")]
    //[Route("api/[controller]")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repo;

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

       [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDTO user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // Make user name lower case
            user.UserName = user.UserName.ToLower();

            // If duplicate user name and return bad request here
            // Need method in AuthRepo to test for this
            if (_repo.ValidateUserName(user.UserName))
            {
                ModelState.AddModelError("UserName", "User name already exists");
                return BadRequest(ModelState);
            }
            var newUser = await _repo.Register(user.UserName, user.Password);
            // Temporary return result for testing
            return StatusCode(201, new { ID = newUser.ID, UserName = newUser.UserName });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO user)
        {
            var storedUser = await _repo.Login(user.UserName, user.Password);
            if (storedUser == null)
            {
                return Unauthorized();
            }

            // Temporary return value for testing
            return Ok(new { ID = storedUser.ID, UserName = storedUser.UserName });
        }
    }
}